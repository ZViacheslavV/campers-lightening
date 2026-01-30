import { Camper } from '@/types/camper';
import { ICONS } from '@/lib/constants';
import styles from './CamperEquipmentsList.module.scss';

export interface Props {
  camper: Camper;
}

type CamperIconKey = keyof Camper & keyof typeof ICONS;
type CamperBooleanFeatureKey = (typeof CAMPER_BOOLEAN_KEYS)[number];
type DerivedFeatureKey = 'automatic';
type EquipmentIconKey = CamperBooleanFeatureKey | DerivedFeatureKey;

const AUTOMATIC_KEY: DerivedFeatureKey = 'automatic';
const CAMPER_BOOLEAN_KEYS: CamperIconKey[] = [
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

const CamperEquipmentsList = ({ camper }: Props) => {
  const activeKeys: EquipmentIconKey[] = [
    ...(camper.transmission === 'automatic' ? [AUTOMATIC_KEY] : []),
    ...CAMPER_BOOLEAN_KEYS.filter((key) => camper[key]),
  ];

  return (
    <div className={styles.camperEquipments}>
      {activeKeys.map((key) => (
        <div key={key} className={styles.equipmentChip}>
          <svg className={styles.equipmentIcon}>
            <use href={`/icons.svg#${ICONS[key]}`} />
          </svg>
          <span className={styles.equipmentLabel}>{key}</span>
        </div>
      ))}
    </div>
  );
};

export default CamperEquipmentsList;
