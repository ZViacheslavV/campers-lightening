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

  const listTopRef = useRef<HTMLDivElement>(null);
  const prevCampersLength = useRef(campers.length);
  const scrollDirectionRef = useRef<'top' | 'down' | null>(null);

  const CARD_HEIGHT = 368;

  // Looking on next scroll
  const handleLoadMore = () => {
    scrollDirectionRef.current = 'down';
    loadMore();
  };

  // Listening and campers and smooth scrolling:
  useEffect(() => {
    const prevCount = prevCampersLength.current;
    const newCount = campers.length;

    if (newCount === prevCount) return; // нічого не змінилося

    if (scrollDirectionRef.current === 'down') {
      // scroll on Load more
      window.scrollBy({ top: CARD_HEIGHT * 2 - 80, behavior: 'smooth' });
    } else {
      // Scroll on Search
      requestAnimationFrame(() => {
        listTopRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }

    prevCampersLength.current = newCount;
    scrollDirectionRef.current = null;
  }, [campers]);

  if (loading && campers.length === 0) return <Loader />;

  return (
    <div ref={listTopRef} className={styles.campersListWrapper}>
      <ul className={styles.campersList}>
        {campers.map((camper) => (
          <CamperCard key={camper.id} camper={camper} />
        ))}
      </ul>

      {loading && campers.length > 0 && <Loader />}

      {hasMore && (
        <button className={styles.loadMoreBtn} onClick={handleLoadMore} disabled={loading}>
          {loading ? 'Loading...' : 'Load More'}
        </button>
      )}

      {!hasMore && campers.length > 0 && <p className={styles.noMore}>No more campers. </p>}
      {campers.length === 0 && <p className={styles.noMore}>No search results. </p>}
    </div>
  );
}
