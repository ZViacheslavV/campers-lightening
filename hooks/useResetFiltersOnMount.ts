import { useEffect } from 'react';
import { useCampersStore } from '@/lib/store/camperStore';

export const useResetFiltersOnMount = () => {
  const setFilter = useCampersStore((s) => s.setFilter);

  useEffect(() => {
    setFilter({});
  }, [setFilter]);
};
