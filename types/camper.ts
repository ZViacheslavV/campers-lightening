export type CamperForm = 'alcove' | 'fullyIntegrated' | 'panelTruck';
export type CamperTransmissionType = 'automatic' | 'manual';
export type CamperEngineType = 'hybrid' | 'petrol' | 'diesel';

export interface CamperGalleryPicture {
  thumb: string;
  original: string;
}

export interface CamperReview {
  reviewer_name: string;
  reviewer_rating: number;
  comment: string;
}

export interface Camper {
  id: string;
  name: string;
  price: number;
  rating: number;
  location: string;
  description: string;

  form: CamperForm;

  length: string;
  width: string;
  height: string;
  tank: string;
  consumption: string;

  transmission: CamperTransmissionType;
  engine: CamperEngineType;

  AC: boolean;
  bathroom: boolean;
  kitchen: boolean;
  TV: boolean;
  radio: boolean;
  refrigerator: boolean;
  microwave: boolean;
  gas: boolean;
  water: boolean;

  gallery: CamperGalleryPicture[];
  reviews: CamperReview[];
}

export interface CampersApiResponse {
  total: number;
  items: Camper[];
}
