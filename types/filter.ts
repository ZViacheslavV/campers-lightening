import { CamperForm } from './camper';

export type Equipment = 'AC' | 'kitchen' | 'TV' | 'bathroom';

export interface CamperFilter {
  location?: string;
  form?: CamperForm;
  equipment?: Equipment[];
  transmission?: 'automatic';
}

export interface CamperFetch {
  page?: number;
  limit?: number;
  filter?: CamperFilter;
}
