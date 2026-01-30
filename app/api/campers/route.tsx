import { NextRequest, NextResponse } from 'next/server';
import { isAxiosError } from 'axios';
import { api } from '../api';
import { API_ENDPOINTS } from '@/lib/constants';

// Query keys that represent boolean equipment filters. Presence of the key means `true`.
const BOOLEAN_EQUIPMENT_FILTER_KEYS = [
  'AC',
  'bathroom',
  'kitchen',
  'TV',
  'radio',
  'refrigerator',
  'microwave',
  'gas',
  'water',
] as const;

// Query keys that represent string-based filters.
const STRING_FILTER_KEYS = ['location', 'form', 'transmission', 'engine'] as const;

type QueryParams = Record<string, string | number | boolean>;

// Extracts pagination params from URLSearchParams.
function parsePaginationParams(searchParams: URLSearchParams) {
  const page = Number(searchParams.get('page')) || 1;
  const limit = Number(searchParams.get('limit')) || 4;

  return { page, limit };
}

// Extracts filter params (string + boolean) from URLSearchParams.
function parseFilterParams(searchParams: URLSearchParams): QueryParams {
  const filters: QueryParams = {};

  STRING_FILTER_KEYS.forEach((key) => {
    const value = searchParams.get(key);
    if (value) {
      filters[key] = value;
    }
  });

  BOOLEAN_EQUIPMENT_FILTER_KEYS.forEach((key) => {
    if (searchParams.has(key)) {
      filters[key] = true;
    }
  });

  return filters;
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = request.nextUrl;

    const paginationParams = parsePaginationParams(searchParams);
    const filterParams = parseFilterParams(searchParams);

    const queryParams: QueryParams = {
      ...paginationParams,
      ...filterParams,
    };

    const upstreamResponse = await api.get(API_ENDPOINTS.CAMPERS, {
      params: queryParams,
    });

    return NextResponse.json(upstreamResponse.data, {
      status: upstreamResponse.status,
    });
  } catch (error) {
    if (isAxiosError(error)) {
      return NextResponse.json(
        {
          error: error.message,
          response: error.response?.data,
        },
        {
          status: error.response?.status ?? 500,
        }
      );
    }

    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
