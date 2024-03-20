import ScrollToTop from '@/components/Common/ScrollToTop';
import './globals.css';

import Nav from '@/components/Header';

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
        <Nav />

        <main className="flex flex-col gap-48">{children}</main>
        <ScrollToTop />
      </body>
    </html>
  );
}
