import { getCamperByIdServer } from '@/lib/api/serverApi';

type Props = {
  params: Promise<{ id: string }>;
};

export const generateMetadata = async ({ params }: Props) => {
  const { id } = await params;
  const { name, description, gallery } = await getCamperByIdServer(id);

  return {
    title: `${name} | Campers Lightening`,
    description: description,
    openGraph: {
      title: name,
      description: description,
      images: [{ url: gallery[0].original }],
    },
    twitter: {
      title: name,
      description: description,
      images: [{ url: gallery[0].original }],
    },
  };
};

const CamperPage = () => <div>Camper Page</div>;

export default CamperPage;
