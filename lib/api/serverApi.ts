import { cookies } from 'next/headers';
import { nextServer } from './api';
import { Camper, CampersApiResponse } from '@/types/camper';
import { API_ENDPOINTS } from '../constants';

//================================================================

const cookieHeaders = async () => {
  const cookieStore = await cookies();
  return { Cookie: cookieStore.toString() };
};

//================================================================

export const getCampersCatalogServer = async () => {
  console.log('🟢 SERVER fetch campers catalog '); // TODO del console.log
  const headers = await cookieHeaders();
  const { data } = await nextServer.get<CampersApiResponse>(API_ENDPOINTS.CAMPERS, { headers });
  return data;
};

export const getCamperByIdServer = async (id: string) => {
  console.log('🟢 SERVER fetch camper by id'); // TODO del console.log
  const headers = await cookieHeaders();
  const { data } = await nextServer.get<Camper>(API_ENDPOINTS.CAMPER_BY_ID(id), {
    headers,
  });
  return data;
};
