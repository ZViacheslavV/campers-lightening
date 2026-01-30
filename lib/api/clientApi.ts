import { Camper, CampersApiResponse } from '@/types/camper';
import { nextServer } from './api';
import { cleanParams } from '@/helpers/cleanParams';
import { CamperFetch } from '@/types/filter';
import { API_ENDPOINTS } from '../constants';

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

export const getCamperById = async (id: string) => {
  console.log('🔵 CLIENT fetch camper by id'); // TODO del console.log

  const url = API_ENDPOINTS.CAMPER_BY_ID(id);
  console.log('FETCH URL:', url);

  const { data } = await nextServer.get<Camper>(API_ENDPOINTS.CAMPER_BY_ID(id));
  return data;
};
