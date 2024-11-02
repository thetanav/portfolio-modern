import './global.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navbar } from './components/nav';
import { Analytics } from '@vercel/analytics/react';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Tanav Poswal',
    template: '%s | Tanav Poswal',
  },
  description: 'Developer, problem solver and creator.',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'Tanav Poswal',
    card: 'summary_large_image',
  },
  verification: {
    google: 'eZSdmzAXlLkKhNJzfgwDqWORghxnJ8qR9_CHdAh5-xw',
    yandex: '14d2e73487fa6c71',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={
          'min-h-screen bg-background font-sans antialiased md:mx-8 sm:mx-8 mx-6 ' +
          inter.className 
        }
      >
        <main className="flex-auto max-w-screen-md mx-auto flex flex-col px-2 md:px-0">
          <Navbar />
          {children}
          <div className="w-full flex items-center justify-center">
              <Image src="/images/initial.png" className="opacity-50 select-none" draggable={false} width={200} height={200} alt="signature" />
          </div>
          <Analytics />
        </main>
      </body>
    </html>
  );
}
