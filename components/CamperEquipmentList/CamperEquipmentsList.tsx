import { Camper } from '@/types/camper';
import { ICONS } from '@/lib/constants';
import styles from './CamperEquipmentsList.module.scss';

export interface Props {
  camper: Camper;
}

const CAMPER_BOOLEAN_KEYS = [
  'AC',
  'kitchen',
  'TV',
  'bathroom',
  'radio',
  'refrigerator',
  'microwave',
  'gas',
  'water',
] as const;

type CamperBooleanFeatureKey = (typeof CAMPER_BOOLEAN_KEYS)[number];
type EquipmentIconKey = CamperBooleanFeatureKey | 'automatic' | 'petrol';

const CamperEquipmentsList = ({ camper }: Props) => {
  const booleanFeatures = CAMPER_BOOLEAN_KEYS.filter((key) =>
    Boolean(camper[key as keyof Camper])
  ) as CamperBooleanFeatureKey[];

  const derivedFeatures = [
    camper.transmission === 'automatic' ? 'automatic' : null,
    camper.engine === 'petrol' ? 'petrol' : null,
  ].filter(Boolean) as EquipmentIconKey[];

  const activeKeys: EquipmentIconKey[] = [...derivedFeatures, ...booleanFeatures];

  return (
    <ul className={styles.camperEquipments}>
      {activeKeys.map((key) => (
        <li key={key} className={styles.equipmentChip}>
          <svg className={styles.equipmentIcon}>
            <use href={ICONS[key as keyof typeof ICONS]} />
          </svg>
          <span className={styles.equipmentLabel}>{key}</span>
        </li>
      ))}
    </ul>
  );
};

export default CamperEquipmentsList;
