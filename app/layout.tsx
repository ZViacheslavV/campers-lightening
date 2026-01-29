import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.scss';
import TanStackProvider from '@/components/TanStackProvider/TanStackProvider';
import Header from '@/components/Header/Header';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL!;

const interFont = Inter({
  variable: '--font-inter',
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Campers Lightening',
  description: 'Explore travel trucks',
  openGraph: {
    title: 'Campers Lightening · Campers collection',
    description: 'Explore travel trucks',
    url: SITE_URL,
    siteName: 'Campers Lightening',
    images: [
      {
        url: '/campers-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Campers image',
      },
    ],
    locale: 'uk_UA',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Campers Lightening',
    description: 'Explore travel trucks',
    images: ['/campers-og.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${interFont.variable}`}>
        <TanStackProvider>
          <Header />
          <main>{children}</main>
        </TanStackProvider>
      </body>
    </html>
  );
}
