import { useState } from 'react';
import styles from './CamperDetails.module.scss';
import Tabs, { DetailsTab } from './Tabs';
import { Camper } from '@/types/camper';
import FeaturesPanel from './FeaturesPanel';
import ReviewsPanel from './ReviewsPanel';

const CamperDetails = ({ camper }: { camper: Camper }) => {
  const [activeTab, setActiveTab] = useState<DetailsTab>('features');

  return (
    <>
      <Tabs activeTab={activeTab} onChange={setActiveTab} />

      <div className={styles.panel}>
        {activeTab === 'features' && <FeaturesPanel camper={camper} />}
        {activeTab === 'reviews' && <ReviewsPanel reviews={camper.reviews} />}
      </div>
    </>
  );
};

export default CamperDetails;
