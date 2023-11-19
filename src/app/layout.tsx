import '@rainbow-me/rainbowkit/styles.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';

import { Providers } from '@/app/provider';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';

import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

// const bodoni = Bodoni_Moda({
//   subsets: ['latin'],
//   variable: '--font-Bodoni_Moda',
// });

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keyword,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          playfair.className,
          inter.className
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
