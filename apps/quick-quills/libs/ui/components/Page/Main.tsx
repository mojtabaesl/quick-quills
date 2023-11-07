import { ScrollArea } from '@radix-ui/themes';
import type { ReactNode } from 'react';

interface PageMainProps {
  children: ReactNode;
}

export const PageMain = ({ children }: PageMainProps) => {
  return (
    <ScrollArea type="always" scrollbars="vertical">
      {children}
    </ScrollArea>
  );
};
