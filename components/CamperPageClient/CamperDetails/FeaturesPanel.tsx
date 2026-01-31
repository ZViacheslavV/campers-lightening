import CamperEquipmentsList from '@/components/CamperEquipmentList/CamperEquipmentsList';
import { Camper } from '@/types/camper';
import styles from './CamperDetails.module.scss';

type Props = {
  camper: Camper;
};

const FeaturesPanel = ({ camper }: Props) => (
  <div className={styles.featuresPanel}>
    <h3 className="visually-hidden">Features</h3>

    <CamperEquipmentsList camper={camper} />
    <div className={styles.vehicleDetails}>
      <h4>Vehicle details</h4>
      <ul>
        <li>
          <p>Form</p>
          <p>{camper.form}</p>
        </li>
        <li>
          <p>Length</p>
          <p>{camper.length}</p>
        </li>
        <li>
          <p>Width</p>
          <p>{camper.width}</p>
        </li>
        <li>
          <p>Height</p>
          <p>{camper.height}</p>
        </li>
        <li>
          <p>Tank</p>
          <p>{camper.tank}</p>
        </li>
        <li>
          <p>Consumption</p>
          <p>{camper.consumption}</p>
        </li>
      </ul>
    </div>
  </div>
);

export default FeaturesPanel;
