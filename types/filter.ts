import { CamperForm } from './camper';

export type Equipment = 'AC' | 'kitchen' | 'TV' | 'bathroom';

export interface CamperFilter {
  location?: string;
  form?: CamperForm;
  equipment?: Equipment[];
  transmission?: string;
}

export interface CamperFetch {
  page?: number;
  limit?: number;
  filter?: CamperFilter;
}
