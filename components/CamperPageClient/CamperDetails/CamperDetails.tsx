import { useState } from 'react';
import Tabs, { DetailsTab } from './Tabs';
import { Camper } from '@/types/camper';
import FeaturesPanel from './FeaturesPanel';
import ReviewsPanel from './ReviewsPanel';

interface Props {
  camper: Camper;
}

const CamperDetails = ({ camper }: Props) => {
  const [activeTab, setActiveTab] = useState<DetailsTab>('features');

  return (
    <>
      <Tabs activeTab={activeTab} onChange={setActiveTab} />

      {activeTab === 'features' && <FeaturesPanel camper={camper} />}
      {activeTab === 'reviews' && <ReviewsPanel reviews={camper.reviews} />}
    </>
  );
};

export default CamperDetails;
