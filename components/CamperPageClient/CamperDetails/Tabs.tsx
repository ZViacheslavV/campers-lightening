import { useEffect, useRef } from 'react';
import styles from './CamperDetails.module.scss';

export type DetailsTab = 'features' | 'reviews';

interface TabsProps {
  activeTab: DetailsTab;
  onChange: (tab: DetailsTab) => void;
}

const Tabs = ({ activeTab, onChange }: TabsProps) => {
  const tabsRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLSpanElement>(null);

  //Slider:
  useEffect(() => {
    const container = tabsRef.current;
    const indicator = indicatorRef.current;
    if (!container || !indicator) return;

    const activeBtn = container.querySelector(`button.${styles.active}`) as HTMLElement;
    if (!activeBtn) return;

    // Smoothly changing slider position and width
    indicator.style.width = `${activeBtn.offsetWidth}px`;
    indicator.style.transform = `translateX(${activeBtn.offsetLeft}px)`;
  }, [activeTab]);

  return (
    <div ref={tabsRef} role="tablist" className={styles.tabs}>
      <button
        role="tab"
        className={activeTab === 'features' ? styles.active : ''}
        aria-selected={activeTab === 'features'}
        onClick={() => onChange('features')}
      >
        Features
      </button>
      <button
        role="tab"
        className={activeTab === 'reviews' ? styles.active : ''}
        aria-selected={activeTab === 'reviews'}
        onClick={() => onChange('reviews')}
      >
        Reviews
      </button>
      <span ref={indicatorRef} className={styles.indicator} />
    </div>
  );
};

export default Tabs;
