'use client';

import { useEffect, useState, useRef } from 'react';
import styles from './ScrollToTop.module.scss';

const HIDE_TIMEOUT = 3700;
const SCROLL_UP_THRESHOLD = 15;

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  const lastScrollY = useRef(0);
  const hideTimer = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;

      const isScrollingUp = lastScrollY.current - currentY > SCROLL_UP_THRESHOLD;
      const isAtBottom = windowHeight + currentY >= fullHeight - 10;

      if ((isScrollingUp && currentY > 0) || isAtBottom) {
        if (!visible) setVisible(true);

        if (hideTimer.current) clearTimeout(hideTimer.current);
        hideTimer.current = window.setTimeout(() => setVisible(false), HIDE_TIMEOUT);
      } else if (currentY === 0) {
        setVisible(false);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (hideTimer.current) clearTimeout(hideTimer.current);
    };
  }, [visible]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button className={styles.scrollTop} onClick={scrollToTop} aria-label="Scroll to top">
      ↑
    </button>
  );
};

export default ScrollToTop;

// 'use client';

// import { useEffect, useState, useRef } from 'react';
// import styles from './ScrollToTop.module.scss';

// const HIDE_TIMEOUT = 4500;
// const SCROLL_UP_THRESHOLD = 150;

// const ScrollToTop = () => {
//   const [visible, setVisible] = useState(false);
//   const lastScrollY = useRef(0);
//   const hideTimer = useRef<number | null>(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentY = window.scrollY;
//       const windowHeight = window.innerHeight;
//       const fullHeight = document.documentElement.scrollHeight;

//       const isScrollingUp = lastScrollY.current - currentY > SCROLL_UP_THRESHOLD;
//       const isAtBottom = windowHeight + currentY >= fullHeight - 10;

//       if ((isScrollingUp && currentY > 0) || isAtBottom) {
//         if (!visible) setVisible(true);

//         if (hideTimer.current) clearTimeout(hideTimer.current);
//         hideTimer.current = window.setTimeout(() => setVisible(false), HIDE_TIMEOUT);
//       } else if (currentY === 0) {
//         setVisible(false);
//       }

//       lastScrollY.current = currentY;
//     };

//     window.addEventListener('scroll', handleScroll, { passive: true });
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//       if (hideTimer.current) clearTimeout(hideTimer.current);
//     };
//   }, [visible]);

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   if (!visible) return null;

//   return (
//     <button className={styles.scrollTop} onClick={scrollToTop} aria-label="Scroll to top">
//       ↑
//     </button>
//   );
// };

// export default ScrollToTop;
