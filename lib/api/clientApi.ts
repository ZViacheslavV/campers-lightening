import { Camper, CampersApiResponse } from '@/types/campers';
import { API_ENDPOINTS, nextServer } from './api';

export const getCampersCatalog = async () => {
  console.log('🔵 CLIENT fetch campers catalog '); // TODO del console.log
  const { data } = await nextServer.get<CampersApiResponse>(API_ENDPOINTS.CAMPERS);
  return data;
};

export const getCamperById = async (id: number | string) => {
  console.log('🔵 CLIENT fetch camper by id'); // TODO del console.log
  const { data } = await nextServer.get<Camper>(`${API_ENDPOINTS.CAMPERS_ID}${id}`);
  return data;
};
