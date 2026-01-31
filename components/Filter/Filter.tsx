'use client';

import { useState, useCallback } from 'react';
import clsx from 'clsx';

import { useCampersStore } from '@/lib/store/camperStore';
import { CamperForm } from '@/types/camper';
import { CamperFilter, Equipment } from '@/types/filter';
import { ICONS } from '@/lib/constants';

import styles from './Filter.module.scss';
import FilterToggle from './FilterToggle/FilterToggle';
import RedButton from '../ui/RedButton/RedButton';
import { MapIcon } from '../ui/MapIcon/MapIcon';

const VEHICLE_TYPES: readonly { label: string; value: CamperForm }[] = [
  { label: 'Van', value: 'panelTruck' },
  { label: 'Fully Integrated', value: 'fullyIntegrated' },
  { label: 'Alcove', value: 'alcove' },
] as const;

const VEHICLE_EQUIPMENT_ORDER: (Equipment | 'automatic')[] = [
  'AC',
  'automatic',
  'kitchen',
  'TV',
  'bathroom',
] as const;

const Filters = () => {
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

  const applySearch = useCallback(() => {
    setFilter({
      location: draftFilters.location || undefined,
      form: draftFilters.form,
      equipment: draftFilters.equipment?.length ? draftFilters.equipment : undefined,
      transmission: draftFilters.transmission,
    });

    // Scrolling to top:
    const topElement = document.querySelector('#campersListTop');
    if (topElement) {
      topElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [draftFilters, setFilter]);

  return (
    <div className={styles.filters}>
      {/* Location */}
      <div className={styles.field}>
        <label className={styles.label}>Location</label>
        <div className={styles.inputWrapper}>
          <MapIcon className={clsx(styles.icon, draftFilters.location?.length && styles.active)} />
          <input
            type="text"
            placeholder="City"
            value={draftFilters.location}
            onChange={(e) => updateDraft('location', e.target.value)}
          />
        </div>
      </div>

      <h3 className={styles.sectionTitle}>Filters</h3>

      {/* Vehicle equipment */}
      <h4 className={styles.subTitle}>Vehicle equipment</h4>
      <ul className={styles.optionsGrid}>
        {VEHICLE_EQUIPMENT_ORDER.map((key) => {
          if (key === 'automatic') {
            return (
              <li key={key}>
                <FilterToggle
                  label="Automatic"
                  icon={ICONS.automatic}
                  checked={draftFilters.transmission === 'automatic'}
                  onToggle={toggleTransmission}
                />
              </li>
            );
          } else {
            const equipmentKey = key as Equipment;
            return (
              <li key={equipmentKey}>
                <FilterToggle
                  label={equipmentKey}
                  icon={ICONS[equipmentKey]}
                  checked={draftFilters.equipment?.includes(equipmentKey) ?? false}
                  onToggle={() => toggleEquipment(equipmentKey)}
                />
              </li>
            );
          }
        })}
      </ul>

      {/* Vehicle type */}
      <h4 className={styles.subTitle}>Vehicle type</h4>

      <ul className={styles.optionsGrid}>
        {VEHICLE_TYPES.map(({ label, value }) => (
          <li key={value}>
            <FilterToggle
              label={label}
              icon={ICONS[value]}
              checked={draftFilters.form === value}
              onToggle={() => updateDraft('form', draftFilters.form === value ? undefined : value)}
              isRadio
            />
          </li>
        ))}
      </ul>

      <RedButton onClick={applySearch} className={styles.redBtn}>
        Search
      </RedButton>
    </div>
  );
};

export default Filters;
