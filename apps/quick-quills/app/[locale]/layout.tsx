import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from './Providers';
import { AppSurface } from '@/ui/components/AppSurface';
import { SideBar } from './SideBar';
import { Main } from './Main';
import { notFound } from 'next/navigation';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Quick Quills',
  description: 'Quick quills list maker',
};

const locales = ['en'];

type Params = {
  locale: string;
};

interface LocalLayoutProps {
  children: React.ReactNode;
  params: Params;
}

export default function LocalLayout({ children, params }: LocalLayoutProps) {
  const isValidLocale = locales.some((cur) => cur === params.locale);
  if (!isValidLocale) notFound();
  return (
    <html lang={params.locale} className={inter.variable}>
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
