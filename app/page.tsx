import Link from 'next/link';
import styles from './page.module.scss';
import Container from '@/components/ui/Container/Container';

//================================================================

const Home = () => {
  return (
    <section className={styles.hero}>
      <Container>
        <div className={styles.content}>
          <h1 className={styles.title}>Campers of your dreams</h1>
          <p className={styles.description}>You can find everything you want in our catalog</p>
          <Link href="/catalog" className={styles.btn}>
            View Now
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default Home;
