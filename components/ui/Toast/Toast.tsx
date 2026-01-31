'use client';

import { memo } from 'react';
import toast from 'react-hot-toast';
import clsx from 'clsx';
import styles from './Toast.module.scss';

export type ToastVariant = 'success' | 'error' | 'info' | 'warning' | 'booking';

interface ToastProps {
  message: string;
  variant?: ToastVariant;
}

// View layer only
const ToastView = memo(function ToastView({ message, variant = 'success' }: ToastProps) {
  return (
    <div role="status" aria-live="polite" className={clsx(styles.toast, styles[variant])}>
      <span className={styles.indicator} aria-hidden />
      <p className={styles.message}>{message}</p>
    </div>
  );
});

ToastView.displayName = 'ToastView';

const DEFAULT_DURATION = 5000;

// Public Toast API
export const Toast = {
  success(message: string, duration = DEFAULT_DURATION) {
    toast.custom(<ToastView message={message} variant="success" />, {
      duration,
    });
  },

  error(message: string, duration = DEFAULT_DURATION) {
    toast.custom(<ToastView message={message} variant="error" />, {
      duration,
    });
  },

  info(message: string, duration = DEFAULT_DURATION) {
    toast.custom(<ToastView message={message} variant="info" />, {
      duration,
    });
  },

  warning(message: string, duration = DEFAULT_DURATION) {
    toast.custom(<ToastView message={message} variant="warning" />, {
      duration,
    });
  },

  booking(message: string, duration = DEFAULT_DURATION) {
    toast.custom(<ToastView message={message} variant="booking" />, {
      duration,
    });
  },
};
