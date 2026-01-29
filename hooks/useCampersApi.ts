// hooks/useCampersApi.ts
'use client';

import { useCallback, useEffect, useRef } from 'react';
import { getCampersCatalog } from '@/lib/api/clientApi';
import { useCampersStore } from '@/lib/store/camperStore';

const PAGE_LIMIT = 4;

export const useCampersApi = () => {
  const filter = useCampersStore((s) => s.filter);
  const page = useCampersStore((s) => s.page);
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

      const nextPage = reset ? 1 : page + 1;

      try {
        const res = await getCampersCatalog({
          page: nextPage,
          limit: PAGE_LIMIT,
          filter,
        });

        setCampers(res.items, reset);
        setPage(nextPage);
        setHasMore(res.items.length === PAGE_LIMIT);
      } catch (e) {
        console.error('Fetch campers failed', e);
      } finally {
        inflightRef.current = false;
        setLoading(false);
      }
    },
    [filter, page, setCampers, setPage, setHasMore, setLoading]
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
