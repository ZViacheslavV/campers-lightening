import { Camper } from '@/types/camper';

const FeaturesPanel = ({ camper }: { camper: Camper }) => (
  <ul>
    <li>Transmission: {camper.transmission}</li>
    <li>Engine: {camper.engine}</li>
    {/* etc */}
  </ul>
);

export default FeaturesPanel;
