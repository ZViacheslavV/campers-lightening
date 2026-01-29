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

export interface CamperFilterParams {
  page?: number;
  form?: string;
  limit?: number;
  location?: string;
  AC?: boolean;
  kitchen?: boolean;
  TV?: boolean;
  bathroom?: boolean;
  transmission?: string;
}
