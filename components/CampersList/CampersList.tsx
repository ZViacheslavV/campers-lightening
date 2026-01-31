'use client';

import { useCampersStore } from '@/lib/store/camperStore';
import { useCampersApi } from '@/hooks/useCampersApi';
import Loader from '@/app/loading';
import CamperCard from './CamperCard/CamperCard';
import styles from './CampersList.module.scss';
import { useEffect, useRef } from 'react';

export default function CampersList() {
  const campers = useCampersStore((state) => state.campers);
  const hasMore = useCampersStore((state) => state.hasMore);
  const loading = useCampersStore((state) => state.loading);

  const { loadMore } = useCampersApi();

  const CARD_HEIGHT = 368;
  const GAP = 24;
  const prevCountRef = useRef(campers.length);
  useEffect(() => {
    const newCount = campers.length;
    const prevCount = prevCountRef.current;

    if (newCount > prevCount) {
      const scrollDistance = CARD_HEIGHT * 2 - 70;
      window.scrollBy({ top: scrollDistance, behavior: 'smooth' });
    }

    prevCountRef.current = newCount;
  }, [campers]);

  /* if (loading && campers.length === 0) return <Loader />; */ // TODO check or delete comments

  return (
    <div className={styles.campersListWrapper}>
      <ul className={styles.campersList}>
        {campers.map((camper) => (
          <CamperCard key={camper.id} camper={camper} />
        ))}
      </ul>

      {loading && campers.length > 0 && <Loader />}

      {hasMore && (
        <button className={styles.loadMoreBtn} onClick={loadMore} disabled={loading}>
          {loading ? 'Loading...' : 'Load More'}
        </button>
      )}

      {!hasMore && campers.length > 0 && <p className={styles.noMore}>No more campers. </p>}
      {campers.length === 0 && <p className={styles.noMore}>No search results. </p>}
    </div>
  );
}
