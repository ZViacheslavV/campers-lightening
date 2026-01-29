import { getCamperByIdServer } from '@/lib/api/serverApi';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const camper = await getCamperByIdServer(params.id);

  return {
    title: `${camper.name} | Campers Lightening`,
    description: camper.description,
    openGraph: {
      title: camper.name,
      description: camper.description,
      images: [{ url: camper.gallery[0].original }],
    },
    twitter: {
      title: camper.name,
      description: camper.description,
      images: [{ url: camper.gallery[0].original }],
    },
  };
}

const CamperPage = () => <div>Camper Page</div>;

export default CamperPage;
