'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from './error.module.scss';
import { ICONS } from '@/lib/constants';

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

const Error = ({ error, reset }: Props) => {
  const router = useRouter();

  useEffect(() => {
    console.error('[App Error]', error);
  }, [error]);

  return (
    <div className={styles.error}>
      <div className={styles.card}>
        <svg className={styles.icon}>
          <use href={ICONS.warning} />
        </svg>

        <h1 className={styles.title}>Something went wrong</h1>

        <p className={styles.description}>
          We couldn’t load the campers data.
          <br />
          Please try again or come back later.
        </p>

        {process.env.NODE_ENV === 'development' && (
          <pre className={styles.devError}>{error.message}</pre>
        )}

        <div className={styles.actions}>
          <button className={styles.retry} onClick={reset}>
            Try again
          </button>

          <button className={styles.back} onClick={() => router.back()}>
            Go back
          </button>
        </div>
      </div>
    </div>
  );
};

export default Error;
