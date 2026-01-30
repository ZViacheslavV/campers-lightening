'use client';

import { useCampersStore } from '@/lib/store/camperStore';
import { useCampersApi } from '@/hooks/useCampersApi';
import Loader from '@/app/loading';
import CamperCard from './CamperCard/CamperCard';
import styles from './CampersList.module.scss';

export default function CampersList() {
  const campers = useCampersStore((state) => state.campers);
  const hasMore = useCampersStore((state) => state.hasMore);
  const loading = useCampersStore((state) => state.loading);

  const { loadMore } = useCampersApi();

  if (loading && campers.length === 0) return <Loader />;

  return (
    <div className={styles.campersList}>
      {campers.map((camper) => (
        <CamperCard key={camper.id} camper={camper} />
      ))}

      {loading && campers.length > 0 && <Loader />}

      {hasMore && !loading && (
        <button className={styles.loadMoreBtn} onClick={loadMore}>
          Load More
        </button>
      )}

      {!hasMore && campers.length > 0 && <p className={styles.noMore}>No more campers. </p>}
      {campers.length === 0 && <p className={styles.noMore}>No search results. </p>}
    </div>
  );
}
