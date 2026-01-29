import CamperPageClient from '@/components/CamperPageClient/CamperPageClient';
import { getCamperByIdServer } from '@/lib/api/serverApi';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

type Props = {
  params: Promise<{ id: string }>;
};

//================================================================

export const generateMetadata = async ({ params }: Props) => {
  const { id } = await params;
  const { name, description, gallery } = await getCamperByIdServer(id);

  return {
    title: `${name} | Campers Lightening`,
    description,
    openGraph: {
      title: name,
      description,
      images: [{ url: gallery[0].original }],
    },
    twitter: {
      title: name,
      description,
      images: [{ url: gallery[0].original }],
    },
  };
};

//================================================================

const CamperPage = async ({ params }: Props) => {
  const queryClient = new QueryClient();

  const { id } = await params;

  queryClient.prefetchQuery({
    queryKey: ['truck', id],
    queryFn: () => getCamperByIdServer(id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <CamperPageClient />
    </HydrationBoundary>
  );
};

export default CamperPage;
