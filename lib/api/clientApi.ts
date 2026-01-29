import { Camper, CampersApiResponse } from '@/types/camper';
import { API_ENDPOINTS, nextServer } from './api';
import { cleanParams } from '@/helpers/cleanParams';
import { CamperFetch, CamperFilterParams } from '@/types/filter';

//================================================================

export const getCampersCatalog = async ({ page = 1, limit = 4, filter }: CamperFetch = {}) => {
  const params = cleanParams({
    page,
    limit,
    filter,
  });
  console.log('🔵 CLIENT fetch campers catalog '); // TODO del console.log
  const { data } = await nextServer.get<CampersApiResponse>(API_ENDPOINTS.CAMPERS, {
    params,
  });
  return data;
};

export const getCamperById = async (id: number | string) => {
  console.log('🔵 CLIENT fetch camper by id'); // TODO del console.log
  const { data } = await nextServer.get<Camper>(`${API_ENDPOINTS.CAMPERS_ID}${id}`);
  return data;
};
