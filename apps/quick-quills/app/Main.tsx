import { Flex } from '@radix-ui/themes';
import type { ReactNode } from 'react';

interface MainProps {
  children: ReactNode;
}

export const Main = ({ children }: MainProps) => {
  return (
    <Flex asChild grow={'1'}>
      <main>{children}</main>
    </Flex>
  );
};
