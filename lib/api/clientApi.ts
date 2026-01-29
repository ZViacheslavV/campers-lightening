import { API_ENDPOINTS, nextServer } from './api';

export type WeeksInfo = {
  weekNumber: number;
  daysLeftToBirth: number;
  babyState: BabyState;
  momState: MomState;
};

export const getWeeksDemo = async (): Promise<WeeksApiResponse> => {
  console.log('🔵 CLIENT fetch catalog '); // TODO del console.log
  const { data } = await nextServer.get<WeeksApiResponse>(API_ENDPOINTS.CAMPERS);
  return data;
};

export const getBabyWeeks = async (weekNumber: number | string): Promise<BabyWeeksApiResponse> => {
  console.log('🔵 CLIENT fetch weeks BABY'); // TODO del console.log
  const { data } = await nextServer.get<BabyWeeksApiResponse>(
    `${API_ENDPOINTS.WEEKS_BABY_WEEK_NUMB}${weekNumber}`
  );
  return data;
};
