import Container from '@/components/ui/Container/Container';
import type { Metadata } from 'next';
import styles from './page.module.scss';
import CampersList from '@/components/CampersList/CampersList';
import Filter from '@/components/Filter/Filter';
import ScrollToTop from '@/components/ScrollToTop/ScrollToTop';

export const metadata: Metadata = {
  title: 'Catalog | Campers Lightening',
  description: 'Find the best travel truck for your purposes',
};

//================================================================

const CatalogPage = () => (
  <section className={styles.catalogSection}>
    <h2 className="visually-hidden">Campers catalog</h2>
    <Container>
      <div className={styles.catalogContentWrapper}>
        <Filter />
        <CampersList />
      </div>
      <ScrollToTop />
    </Container>
  </section>
);

export default CatalogPage;
