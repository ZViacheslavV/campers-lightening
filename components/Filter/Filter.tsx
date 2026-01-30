'use client';

import { useState, useCallback } from 'react';
import { Map } from 'lucide-react';

import { useCampersStore } from '@/lib/store/camperStore';
import { CamperForm } from '@/types/camper';
import { CamperFilter, Equipment } from '@/types/filter';

import styles from './Filter.module.scss';
import FilterToggle from './FilterToggle/FilterToggle';

const EQUIPMENT_OPTIONS: readonly Equipment[] = ['AC', 'kitchen', 'TV', 'bathroom'] as const;

const VEHICLE_TYPES: readonly { label: string; value: CamperForm }[] = [
  { label: 'Van', value: 'panelTruck' },
  { label: 'Fully Integrated', value: 'fullyIntegrated' },
  { label: 'Alcove', value: 'alcove' },
];

export default function Filters() {
  const { filter, setFilter } = useCampersStore();

  const [draftFilters, setDraftFilters] = useState<CamperFilter>({
    location: filter.location ?? '',
    form: filter.form ?? undefined,
    equipment: filter.equipment ?? [],
    transmission: filter.transmission ?? undefined,
  });

  const updateDraft = useCallback(
    <K extends keyof CamperFilter>(key: K, value: CamperFilter[K]) => {
      setDraftFilters((prev) => ({ ...prev, [key]: value }));
    },
    []
  );

  const toggleEquipment = useCallback((equipment: Equipment) => {
    setDraftFilters((prev) => ({
      ...prev,
      equipment: prev.equipment?.includes(equipment)
        ? prev.equipment.filter((e) => e !== equipment)
        : [...(prev.equipment ?? []), equipment],
    }));
  }, []);

  const toggleTransmission = useCallback(() => {
    setDraftFilters((prev) => ({
      ...prev,
      transmission: prev.transmission === 'automatic' ? undefined : 'automatic',
    }));
  }, []);

  const applyFilters = useCallback(() => {
    setFilter({
      location: draftFilters.location || undefined,
      form: draftFilters.form,
      equipment: draftFilters.equipment?.length ? draftFilters.equipment : undefined,
      transmission: draftFilters.transmission,
    });
  }, [draftFilters, setFilter]);

  return (
    <div className={styles.filters}>
      <div className={styles.field}>
        <label className={styles.label}>Location</label>
        <div className={styles.inputWrapper}>
          <Map className={styles.icon} />
          <div className="location"></div>
          <input
            type="text"
            placeholder="City"
            value={draftFilters.location}
            onChange={(e) => updateDraft('location', e.target.value)}
          />
        </div>
      </div>

      <h3 className={styles.sectionTitle}>Filters</h3>

      <h4 className={styles.subTitle}>Vehicle equipment</h4>
      <div className={styles.divider} />

      <div className={styles.optionsGrid}>
        <FilterToggle
          label="Automatic"
          /* icon={icons.automatic} */
          checked={draftFilters.transmission === 'automatic'}
          onToggle={toggleTransmission}
        />

        {EQUIPMENT_OPTIONS.map((item) => (
          <FilterToggle
            key={item}
            label={item}
            /* icon={icons[item]} */
            checked={draftFilters.equipment?.includes(item) ?? false}
            onToggle={() => toggleEquipment(item)}
          />
        ))}
      </div>

      <h4 className={styles.subTitle}>Vehicle type</h4>
      <div className={styles.divider} />

      <div className={styles.optionsGrid}>
        {VEHICLE_TYPES.map(({ label, value }) => (
          <FilterToggle
            key={value}
            label={label}
            /* icon={icons[value]} */
            checked={draftFilters.form === value}
            onToggle={() => updateDraft('form', value)}
            isRadio
          />
        ))}
      </div>

      <button className={styles.applyButton} onClick={applyFilters}>
        Apply filters
      </button>
    </div>
  );
}
