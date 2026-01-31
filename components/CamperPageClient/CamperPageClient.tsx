'use client';

import { useParams } from 'next/navigation';
import Container from '../ui/Container/Container';
import styles from './CamperPageClient.module.scss';
import { useQuery } from '@tanstack/react-query';
import { getCamperById } from '@/lib/api/clientApi';
import Loader from '@/app/loading';
import CamperGalleryInfo from './CamperGalleryInfo/CamperGalleryInfo';
import CamperDetails from './CamperDetails/CamperDetails';
import FormCampervan from './FormCampervan/FormCampervan';

//================================================================

const CamperPageClient = () => {
  const { id } = useParams<{ id: string }>();

  const {
    data: camper,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['truck', id],
    queryFn: () => getCamperById(id),
    refetchOnMount: false,
  });

  if (isLoading) return <Loader />;

  if (error || !camper) return <p className={styles.wrong}>Something went wrong.</p>;

  return (
    <section className={styles.camperSection}>
      <Container>
        <CamperGalleryInfo camper={camper} />
        <div id="reviews" className={styles.detailsBottomHalfWrapper}>
          {<CamperDetails camper={camper} />}
          {<FormCampervan />}
        </div>
      </Container>
    </section>
  );
};

export default CamperPageClient;
