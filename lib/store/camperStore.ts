// lib/store/campersStore.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Camper } from '@/types/camper';
import { CamperFilter } from '@/types/filter';

interface CampersStore {
  campers: Camper[];
  favorites: string[];
  filter: CamperFilter;
  page: number;
  hasMore: boolean;
  loading: boolean;

  setCampers: (campers: Camper[], reset: boolean) => void;
  toggleFavorite: (id: string) => void;
  setFilter: (filter: CamperFilter) => void;
  setPage: (page: number) => void;
  setHasMore: (hasMore: boolean) => void;
  setLoading: (loading: boolean) => void;
}

export const useCampersStore = create<CampersStore>()(
  persist(
    (set) => ({
      campers: [],
      favorites: [],
      filter: {},
      page: 1,
      hasMore: true,
      loading: false,

      setCampers: (items, reset) =>
        set((state) => ({
          campers: reset ? items : [...state.campers, ...items],
        })),

      toggleFavorite: (id) =>
        set((state) => ({
          favorites: state.favorites.includes(id)
            ? state.favorites.filter((el) => el !== id)
            : [...state.favorites, id],
        })),

      setFilter: (filter) =>
        set(() => ({
          filter,
          page: 1,
          campers: [],
          hasMore: true,
        })),

      setPage: (page) => set({ page }),
      setHasMore: (hasMore) => set({ hasMore }),
      setLoading: (loading) => set({ loading }),
    }),
    {
      name: 'campers-local',
      partialize: (state) => ({
        favorites: state.favorites,
        filter: state.filter,
      }),
    }
  )
);
