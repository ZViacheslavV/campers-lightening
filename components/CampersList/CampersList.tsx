'use client';

import { useEffect } from 'react';

import { useCampersStore } from '@/lib/store/camperStore';
import { useCampersApi } from '@/hooks/useCampersApi';
import Loader from '@/app/loading';
import CamperCard from '../CamperCard/CamperCard';

export default function CampersList() {
  // const { campers, favorites, loading, hasMore, filter } = useCampersStore(); //TODO del comments
  //const filter = useCampersStore((state) => state.filter);
  const campers = useCampersStore((state) => state.campers);
  const hasMore = useCampersStore((state) => state.hasMore);
  const loading = useCampersStore((state) => state.loading);

  const { /* fetchCampers, */ loadMore } = useCampersApi();

  /*   useEffect(() => {
    fetchCampers(true);
  }, [filter, fetchCampers]); */

  if (loading && campers.length === 0) return <Loader />;

  return (
    <div className="campers-list">
      {campers.map((camper) => (
        <CamperCard key={camper.id} camper={camper} />
      ))}

      {loading && campers.length > 0 && <Loader />}

      {hasMore && !loading && (
        <button className="load-more-btn" onClick={loadMore}>
          Load More
        </button>
      )}

      {!hasMore && campers.length > 0 && <p className="no-more">No more campers. </p>}
    </div>
  );
}
