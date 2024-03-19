import './globals.css';

import Nav from '@/components/Header';
// import Toast from '../components/toast';
import { Suspense } from 'react';

export const metadata = {
  title: 'Fedeteria',
  description: 'Una web para hacer trueques.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-background-100 text-text-900">
      <head>
        <link
          rel="icon"
          href="/fedeteria_logos/Fedeteria_Solo_Logo.svg"
          sizes="any"
        />
      </head>
      <body className="relative min-h-screen w-full h-auto overflow-x-hidden">
        <Suspense>
          <Nav />
        </Suspense>
        {children}
        {/* <Toast /> */}
      </body>
    </html>
  );
}
