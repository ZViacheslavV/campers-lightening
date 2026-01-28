'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import clsx from 'clsx';

import Container from '../ui/Container/Container';
import styles from './Header.module.scss';

const Header = () => {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.inner}>
          <Link href="/" className={styles.logo}>
            <svg width={136} height={16} aria-label="Campers Lightening logo">
              <use href="/icons.svg#icon-Logo" />
            </svg>
          </Link>

          <nav className={styles.nav}>
            <ul className={styles.navList}>
              <li>
                <Link href="/" className={clsx(styles.link, pathname === '/' && styles.active)}>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/catalog"
                  className={clsx(styles.link, pathname === '/catalog' && styles.active)}
                >
                  Catalog
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;
