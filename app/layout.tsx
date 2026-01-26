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
const GRAPH_IMAGE_URL = ''; //TODO add graph image and url

const interFont = Inter({
  variable: '--font-inter',
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Campers lightening',
  description: 'Investigate travel trucks',
  openGraph: {
    title: 'Campers lightening · Campers collection',
    description: 'Investigate travel trucks ',
    url: SITE_URL,
    siteName: 'Campers lightening',
    images: [
      {
        url: GRAPH_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: 'Notebook image',
      },
    ],
  },
};

export default function RootLayout({
  children,
  /* modal,//TODO del comments  */
}: Readonly<{
  children: React.ReactNode;
  /* modal: React.ReactNode;//TODO del comments   */
}>) {
  return (
    <html lang="en">
      <body className={`${interFont.variable}`}>
        <TanStackProvider>
          {/*  <Header /> //TODO add header*/}
          <main>
            {children}
            {/* {modal}//TODO del comments */}
          </main>
          {/* <Footer />//TODO del comments */}
        </TanStackProvider>
      </body>
    </html>
  );
}
