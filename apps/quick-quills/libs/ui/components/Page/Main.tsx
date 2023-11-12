import type { ReactNode } from 'react';
import { Stack } from '../Stack';

interface PageMainProps {
  children: ReactNode;
}

export const PageMain = ({ children }: PageMainProps) => {
  return (
    <Stack grow={'1'} pt={'7'} pb={'2'}>
      {children}
    </Stack>
  );
};
