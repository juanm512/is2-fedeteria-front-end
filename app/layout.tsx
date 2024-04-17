import ScrollToTop from '@/components/Common/ScrollToTop';
import './globals.css';

import Nav from '@/components/Header';

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="bg-gradient-to-br from-background-50 to-accent-50 text-text-900"
    >
      <head>
        <link
          rel="icon"
          href="/fedeteria_logos/Fedeteria_Solo_Logo.svg"
          sizes="any"
        />
      </head>
      <body className="relative min-h-screen w-full h-auto overflow-x-hidden">
        <Nav />

        <main className="flex h-full flex-col gap-32">{children}</main>
        <ScrollToTop />
      </body>
    </html>
  );
}
