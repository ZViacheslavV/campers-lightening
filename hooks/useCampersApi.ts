import { useCallback, useEffect } from 'react';
import { getCampersCatalog } from '@/lib/api/clientApi';
import { useCampersStore } from '@/lib/store/camperStore';

export const useCampersApi = () => {
  const filter = useCampersStore((state) => state.filter);
  const page = useCampersStore((state) => state.page);
  const hasMore = useCampersStore((state) => state.hasMore);
  const loading = useCampersStore((state) => state.loading);

  const setCampers = useCampersStore((state) => state.setCampers);
  const setPage = useCampersStore((state) => state.setPage);
  const setHasMore = useCampersStore((state) => state.setHasMore);
  const setLoading = useCampersStore((state) => state.setLoading);

  const fetchCampers = useCallback(
    async (reset: boolean = true) => {
      if (loading) return;

      setLoading(true);
      const currentPage = reset ? 1 : page + 1;

      try {
        const response = await getCampersCatalog({
          page: currentPage,
          limit: 4,
          filter,
        });

        setCampers(response.items, reset);
        setPage(currentPage);
        setHasMore(response.items.length === 4);
      } catch (err) {
        console.error('Error fetching campers:', err);
      } finally {
        setLoading(false);
      }
    },
    [filter, page, loading, setCampers, setPage, setHasMore, setLoading]
  );

  const loadMore = useCallback(() => {
    if (!hasMore || loading) return;
    fetchCampers(false);
  }, [hasMore, loading, fetchCampers]);

  //Automatic fetch after filter changed:
  useEffect(() => {
    fetchCampers(true);
  }, [filter, fetchCampers]);

  return { fetchCampers, loadMore };
};
