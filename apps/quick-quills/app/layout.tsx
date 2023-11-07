import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from './Providers';
import { AppSurface } from '@/ui/components/AppSurface';
import { SideBar } from './SideBar';
import { Main } from './Main';

import '@/ui/styles/reset.css';
import '@radix-ui/themes/styles.css';
import '@/ui/styles/tokens.css';
import '@/ui/styles/radix-theme-config.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Quick Quills',
  description: 'Quick quills list maker',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Providers>
          <AppSurface>
            <SideBar />
            <Main>{children}</Main>
          </AppSurface>
        </Providers>
      </body>
    </html>
  );
}
