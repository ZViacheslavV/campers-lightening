export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL!;

export const PAGE_LIMIT = 4;

export const API_ENDPOINTS = {
  CAMPERS: '/campers',
  CAMPER_BY_ID: (id: string) => `/campers/${id}`,
} as const;

const iconsMap = [
  ['AC', 'icon-wind'],
  ['kitchen', 'icon-cup-hot'],
  ['TV', 'icon-tv'],
  ['bathroom', 'icon-shower'],
  ['panelTruck', 'icon-grid-1x2'],
  ['fullyIntegrated', 'icon-grid'],
  ['alcove', 'icon-grid-3x3-gap'],
  ['automatic', 'icon-diagram'],
  ['radio', 'icon-radios'],
  ['refrigerator', 'icon-solar_fridge-outline'],
  ['microwave', 'icon-microwave'],
  ['gas', 'icon-gas-stove'],
  ['water', 'icon-water'],
  ['heart', 'icon-heart'],
  ['star', 'icon-star'],
  ['warning', 'icon-warning'],
] as const;

export const ICONS = Object.fromEntries(
  iconsMap.map(([key, icon]) => [key, `/icons.svg#${icon}`])
) as Record<IconKey, string>;

type IconKey =
  | 'AC'
  | 'kitchen'
  | 'TV'
  | 'bathroom'
  | 'panelTruck'
  | 'fullyIntegrated'
  | 'alcove'
  | 'automatic'
  | 'radio'
  | 'refrigerator'
  | 'microwave'
  | 'gas'
  | 'water'
  | 'heart'
  | 'star'
  | 'warning';
