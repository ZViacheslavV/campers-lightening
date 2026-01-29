import clsx from 'clsx';
import css from './page.module.scss';
import { Metadata } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL!;

export const metadata: Metadata = {
  title: 'Campers Lightening | 404 - Page not found',
  description: 'The page you are looking for does not exist',
  openGraph: {
    title: 'Campers Lightening | 404 - Page not found',
    description: 'The page you are looking for does not exist',
    url: `${SITE_URL}/404`,
    siteName: 'Campers Lightening',
    images: [
      {
        url: '/campers-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Page not found',
      },
    ],
    locale: 'uk_UA',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Campers Lightening | 404 - Page not found',
    description: 'The page you are looking for does not exist',
    images: ['/campers-og.jpg'],
  },
};

const NotFound = () => (
  <div className={clsx(css.content, css.center)}>
    <h1 className={css.title}>404 - Page not found</h1>
    <p className={css.description}>Sorry, the page you are looking for does not exist.</p>
  </div>
);

export default NotFound;
