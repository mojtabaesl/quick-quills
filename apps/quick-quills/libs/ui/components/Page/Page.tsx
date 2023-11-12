import { Stack } from '@/ui/components/Stack';
import type { ReactNode } from 'react';
import { PageHeader } from './Header';
import { PageMain } from './Main';
import { PageQuickAccess } from './QuickAccess';
import { Container } from './Container';

interface PageProps {
  children: ReactNode;
}

export const Page = ({ children }: PageProps) => {
  return (
    <Stack grow={'1'} justify={'between'}>
      {children}
    </Stack>
  );
};

Page.Header = PageHeader;
Page.Main = PageMain;
Page.QuickAccess = PageQuickAccess;
Page.Container = Container;
