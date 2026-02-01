'use client';

import { useCallback, useEffect, useRef } from 'react';
import { getCampersCatalog } from '@/lib/api/clientApi';
import { useCampersStore } from '@/lib/store/camperStore';
import { PAGE_LIMIT } from '@/lib/constants';

export const useCampersApi = () => {
  const filter = useCampersStore((s) => s.filter);
  const hasMore = useCampersStore((s) => s.hasMore);
  const loading = useCampersStore((s) => s.loading);

  const setCampers = useCampersStore((s) => s.setCampers);
  const setPage = useCampersStore((s) => s.setPage);
  const setHasMore = useCampersStore((s) => s.setHasMore);
  const setLoading = useCampersStore((s) => s.setLoading);

  const inflightRef = useRef(false);

  const fetchCampers = useCallback(
    async (reset: boolean) => {
      if (inflightRef.current) return;

      inflightRef.current = true;
      setLoading(true);

      const page = reset ? 1 : useCampersStore.getState().page + 1;

      try {
        const res = await getCampersCatalog({
          page,
          limit: PAGE_LIMIT,
          filter,
        });

        setCampers(res.items, reset);
        setPage(page);
        setHasMore(res.items.length === PAGE_LIMIT);
      } finally {
        inflightRef.current = false;
        setLoading(false);
      }
    },
    [filter, setCampers, setPage, setHasMore, setLoading]
  );

  const loadMore = useCallback(() => {
    if (!hasMore || loading) return;
    fetchCampers(false);
  }, [fetchCampers, hasMore, loading]);

  //Automatic fetch after filter changed:
  useEffect(() => {
    fetchCampers(true);
  }, [filter, fetchCampers]);

  return { fetchCampers, loadMore };
};
