'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import clsx from 'clsx';

import Container from '../ui/Container/Container';
import styles from './Header.module.css';

const Header = () => {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.inner}>
          {/* Logo */}
          <Link href="/" className={styles.logo}>
            <svg width={136} height={16} aria-label="Campers logo">
              <use href="/icons.svg#icon-Logo" />
            </svg>
          </Link>

          {/* Desktop navigation */}
          <ul className={styles.nav}>
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
        </div>
      </Container>
    </header>
  );
};

export default Header;

// import { usePathname } from 'next/navigation';
// import Link from "next/link";

// import Container from '../ui/Container/Container';

// const Header = () => {
//   const pathname = usePathname();

//   return  (<header>
//             <Container><div className="flex items-center justify-between">
//                 {/* Logo */}
//                 <Link href="/">
//                     <svg width={136} height={16}>
//                         <use href="/icons.svg#icon-Logo"></use>
//                     </svg>
//                 </Link>

//                 {/* Desktop navigation */}
//                 <ul className="hidden lg:flex gap-8">
//                     <li>
//                         <Link
//                             href="/"
//                             className={`font-medium text-base transition ${pathname === "/"
//                                     ? "text-(--button-hover)"
//                                     : "text-(--main) hover:text-(--button-hover)"
//                                 }`}
//                         >
//                             Home
//                         </Link>
//                     </li>
//                     <li>
//                         <Link
//                             href="/catalog"
//                             className={`font-medium text-base transition ${pathname === "/catalog"
//                                     ? "text-(--button-hover)"
//                                     : "text-(--main) hover:text-(--button-hover)"
//                                 }`}
//                         >
//                             Catalog
//                         </Link>
//                     </li>
//                 </ul></Container>
//         </header>
//     )
// }

// export default Header;
