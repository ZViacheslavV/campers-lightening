import CamperEquipmentsList from '@/components/CamperEquipmentList/CamperEquipmentsList';
import { Camper } from '@/types/camper';
import styles from './CamperDetails.module.scss';
import { normalizeCamelCase, normalizeLiters, normalizeMeters } from '@/helpers/detailsNormalizers';

type Props = {
  camper: Camper;
};

const FeaturesPanel = ({ camper }: Props) => {
  if (!camper) return null;

  const vehicleDetailsList: Record<string, string> = {
    Form: normalizeCamelCase(camper.form),
    Length: normalizeMeters(camper.length),
    Width: normalizeMeters(camper.width),
    Height: normalizeMeters(camper.height),
    Tank: normalizeLiters(camper.tank),
    Consumption: camper.consumption,
  };
  return (
    <div className={styles.featuresPanel}>
      <h3 className="visually-hidden">Features</h3>

      <CamperEquipmentsList camper={camper} />
      <div className={styles.vehicleDetails}>
        <h4 className={styles.subTitle}>Vehicle details</h4>

        <ul className={styles.detailsList}>
          {Object.entries(vehicleDetailsList).map(([key, val], i) => (
            <li key={i} className={styles.detailsLitem}>
              <span>{key}</span>
              <span>{val}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FeaturesPanel;
