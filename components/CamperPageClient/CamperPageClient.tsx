'use client';

import { useParams } from 'next/navigation';
import Container from '../ui/Container/Container';
import styles from './CamperPageClient.module.scss';
import { useQuery } from '@tanstack/react-query';
import { getCamperById } from '@/lib/api/clientApi';
import Loader from '@/app/loading';
import CamperHeaderMeta from '../CamperHeaderMeta/CamperHeaderMeta';

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
      {/* <h2 className="visually-hidden">Camper truck details</h2> //TODO del comments*/}
      <Container>
        <CamperHeaderMeta camper={camper} showFavorite={false} priceBelow />

        <div className={styles.camperContentWrapper}>
          <div className="detailsTopHalfWrapper">{/* <CamperInfo /> */}</div>
          <div className="detailsBottomHalfWrapper">
            <div id="reviews">{/* <Reviews /> */}</div>
            <div id="features">{/* <Features /> */}</div>
            <div className="form">{/* <FormCampervan /> */}</div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CamperPageClient;
