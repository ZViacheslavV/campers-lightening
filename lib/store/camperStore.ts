import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Camper } from '@/types/camper';
import { CamperFilter } from '@/types/filter';

export interface CampersStore {
  campers: Camper[];
  favorites: string[];
  filter: CamperFilter;
  page: number;
  hasMore: boolean;
  loading: boolean;

  setCampers: (campers: Camper[], reset?: boolean) => void;
  setFavorites: (id: string) => void;
  setFilters: (filter: CamperFilter) => void;
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

      setCampers: (newCampers: Camper[], reset = false) =>
        set((state) => ({
          campers: reset ? newCampers : [...state.campers, ...newCampers],
        })),

      setFavorites: (id: string) =>
        set((state) => ({
          favorites: state.favorites.includes(id)
            ? state.favorites.filter((el) => el !== id)
            : [...state.favorites, id],
        })),

      setFilters: (filter: CamperFilter) => set({ filter, page: 1 }),

      setPage: (page: number) => set({ page }),

      setHasMore: (hasMore: boolean) => set({ hasMore }),

      setLoading: (loading: boolean) => set({ loading }),
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
