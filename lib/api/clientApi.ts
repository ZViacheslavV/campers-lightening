import { Camper, CamperForm, CampersApiResponse } from '@/types/camper';
import { nextServer } from './api';
import { CamperFetchParams, Equipment, Transmission } from '@/types/filter';
import { API_ENDPOINTS, PAGE_LIMIT } from '../constants';
import { AxiosError } from 'axios';

//================================================================

type CampersQueryParams = {
  page: number;
  limit: number;
  location?: string;
  form?: CamperForm;
  transmission?: Transmission;
} & Partial<Record<Equipment, true>>;

//================================================================

export const getCampersCatalog = async ({
  page = 1,
  limit = PAGE_LIMIT,
  filter,
}: CamperFetchParams): Promise<CampersApiResponse> => {
  const params: CampersQueryParams = {
    page,
    limit,
  };

  if (filter?.location) params.location = filter.location;
  if (filter?.form) params.form = filter.form;
  if (filter?.transmission) params.transmission = filter.transmission;
  if (filter?.equipment?.length) for (const key of filter.equipment) params[key] = true;

  console.log('🔵 CLIENT fetch campers catalog '); // TODO del console.log

  try {
    const { data } = await nextServer.get<CampersApiResponse>(API_ENDPOINTS.CAMPERS, { params });

    return data;
  } catch (err) {
    const axiosError = err as AxiosError<CampersApiResponse>;

    if (axiosError.response?.status === 404) {
      return { total: 0, items: [] };
    }

    throw err;
  }
};

export const getCamperById = async (id: string) => {
  console.log('🔵 CLIENT fetch camper by id'); // TODO del console.log
  const { data } = await nextServer.get<Camper>(API_ENDPOINTS.CAMPER_BY_ID(id));
  return data;
};
