import Container from '../ui/Container/Container';
import styles from './CamperPageClient.module.scss';

const CamperPageClient = () => (
  <section className={styles.camperSection}>
    {/* <h2 className="visually-hidden">Camper truck details</h2> //TODO del comments*/}
    <Container>
      <div className={styles.camperContentWrapper}>Camper truck details</div>
    </Container>
  </section>
);

export default CamperPageClient;
