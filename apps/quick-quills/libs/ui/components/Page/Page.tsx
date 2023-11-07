import { Stack } from '@/ui/components/Stack';
import type { ReactNode } from 'react';
import { PageHeader } from './Header';
import { PageMain } from './Main';
import { PageQuickAccess } from './QuickAccess';

interface PageProps {
  children: ReactNode;
}

export const Page = ({ children }: PageProps) => {
  return <Stack grow={'1'}>{children}</Stack>;
};

Page.Header = PageHeader;
Page.Main = PageMain;
Page.QuickAccess = PageQuickAccess;

// <ScrollArea type="always" scrollbars="vertical">
//   <TodoList />
// </ScrollArea>
