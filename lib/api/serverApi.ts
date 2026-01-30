import { cookies } from 'next/headers';
import { nextServer } from './api';
import { Camper, CampersApiResponse } from '@/types/camper';
import { API_ENDPOINTS, PAGE_LIMIT } from '../constants';
import { CamperFetch } from '@/types/filter';
import { cleanParams } from '@/helpers/cleanParams';
import { AxiosError } from 'axios';

//================================================================

const cookieHeaders = async () => {
  const cookieStore = await cookies();
  return { Cookie: cookieStore.toString() };
};

//================================================================

export const getCampersCatalogServer = async ({
  page = 1,
  limit = PAGE_LIMIT,
  filter,
}: CamperFetch = {}) => {
  console.log('🟢 SERVER fetch campers catalog'); // TODO del console.log

  const headers = await cookieHeaders();

  const params = cleanParams({
    page,
    limit,
    ...filter,
  });

  try {
    const { data } = await nextServer.get<CampersApiResponse>(API_ENDPOINTS.CAMPERS, {
      headers,
      params,
    });
    return data;
  } catch (err) {
    const axiosError = err as AxiosError<CampersApiResponse>;
    if (axiosError.response?.status === 404) {
      return { items: [] };
    }
    throw err;
  }
};

export const getCamperByIdServer = async (id: string) => {
  console.log('🟢 SERVER fetch camper by id'); // TODO del console.log
  const headers = await cookieHeaders();
  const { data } = await nextServer.get<Camper>(API_ENDPOINTS.CAMPER_BY_ID(id), {
    headers,
  });
  return data;
};
