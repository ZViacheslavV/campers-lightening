// filter.ts
import { CamperForm } from './camper';

export type Equipment = 'AC' | 'kitchen' | 'TV' | 'bathroom';

export type Transmission = 'automatic';

export interface CamperFilter {
  location?: string;
  form?: CamperForm;
  equipment?: readonly Equipment[];
  transmission?: Transmission;
}

export interface CamperFetchParams {
  page?: number;
  limit?: number;
  filter?: CamperFilter;
}

/* import { CamperForm } from './camper';

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
 */
