import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import TanStackProvider from '@/components/TanStackProvider/TanStackProvider';

/* import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import TanStackProvider from '@/components/TanStackProvider/TanStackProvider';
import { GRAPH_IMAGE_URL, SITE_URL } from '@/lib/constants';
import AuthProvider from '@/components/AuthProvider/AuthProvider'; */
//TODO del comments

/* const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
}); */

const SITE_URL = ''; //TODO add SITE URL

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
          {/*  <Header /> //TODO add header*/}
          <main>{children}</main>
        </TanStackProvider>
      </body>
    </html>
  );
}
