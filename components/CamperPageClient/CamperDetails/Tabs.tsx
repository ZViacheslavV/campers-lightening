import styles from './CamperDetails.module.scss';

export type DetailsTab = 'features' | 'reviews';
interface TabsProps {
  activeTab: DetailsTab;
  onChange: (tab: DetailsTab) => void;
}

const Tabs = ({ activeTab, onChange }: TabsProps) => (
  <div role="tablist" className={styles.tabs}>
    <button
      role="tab"
      aria-selected={activeTab === 'features'}
      className={activeTab === 'features' ? styles.active : ''}
      onClick={() => onChange('features')}
    >
      Features
    </button>

    <button
      role="tab"
      aria-selected={activeTab === 'reviews'}
      className={activeTab === 'reviews' ? styles.active : ''}
      onClick={() => onChange('reviews')}
    >
      Reviews
    </button>
  </div>
);

export default Tabs;
