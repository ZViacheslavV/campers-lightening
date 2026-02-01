import { cookies } from 'next/headers';
import { nextServer } from './api';
import { Camper, CamperForm, CampersApiResponse } from '@/types/camper';
import { API_ENDPOINTS, PAGE_LIMIT } from '../constants';
import { CamperFetchParams, Equipment, Transmission } from '@/types/filter';
import { AxiosError } from 'axios';

//================================================================

const cookieHeaders = async () => {
  const cookieStore = await cookies();
  return { Cookie: cookieStore.toString() };
};

//================================================================

type CampersQueryParams = {
  page: number;
  limit: number;
  location?: string;
  form?: CamperForm;
  transmission?: Transmission;
} & Partial<Record<Equipment, true>>;

export const getCampersCatalogServer = async ({
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

  const headers = await cookieHeaders();

  try {
    const { data } = await nextServer.get<CampersApiResponse>(API_ENDPOINTS.CAMPERS, {
      headers,
      params,
    });

    return data;
  } catch (err) {
    const axiosError = err as AxiosError<CampersApiResponse>;

    if (axiosError.response?.status === 404) {
      return { total: 0, items: [] };
    }

    throw err;
  }
};

export const getCamperByIdServer = async (id: string) => {
  const headers = await cookieHeaders();
  const { data } = await nextServer.get<Camper>(API_ENDPOINTS.CAMPER_BY_ID(id), {
    headers,
  });
  return data;
};
