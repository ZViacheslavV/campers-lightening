import { isAxiosError } from 'axios';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { logErrorResponse } from '../../_utils/utils';
import { api } from '../../api';
import { API_ENDPOINTS } from '@/lib/constants';

export const dynamic = 'force-dynamic';

type Props = {
  params: Promise<{ id: string }>;
};

export async function GET(request: Request, { params }: Props) {
  const cookieStore = await cookies();
  const { id } = await params;

  try {
    const res = await api.get(API_ENDPOINTS.CAMPER_BY_ID(id), {
      headers: { Cookie: cookieStore.toString() },
    });
    return NextResponse.json(res.data, { status: res.status });
  } catch (error) {
    if (isAxiosError(error)) {
      logErrorResponse(error.response?.data);
      return NextResponse.json(
        { error: error.message, response: error.response?.data },
        { status: error.status }
      );
    }
    logErrorResponse({ message: (error as Error).message });

    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
