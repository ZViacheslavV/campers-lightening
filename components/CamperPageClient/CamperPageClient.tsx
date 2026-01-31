'use client';

import { useParams } from 'next/navigation';
import Container from '../ui/Container/Container';
import styles from './CamperPageClient.module.scss';
import { useQuery } from '@tanstack/react-query';
import { getCamperById } from '@/lib/api/clientApi';
import Loader from '@/app/loading';
import CamperGalleryInfo from './CamperGalleryInfo/CamperGalleryInfo';

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

  if (error || !camper) return <p>Something went wrong.</p>;

  return (
    <section className={styles.camperSection}>
      <Container>
        <CamperGalleryInfo camper={camper} />
        <div className={styles.detailsBottomHalfWrapper}>
          <div id="reviews">{/* <Reviews /> */}</div>

          <div className="form">{/* <FormCampervan /> */}</div>
        </div>
      </Container>
    </section>
  );
};

export default CamperPageClient;
