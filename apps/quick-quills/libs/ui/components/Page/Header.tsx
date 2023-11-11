import { Flex } from '@radix-ui/themes';
import type { ReactNode } from 'react';

interface PageHeaderProps {
  children: ReactNode;
}

export const PageHeader = ({ children }: PageHeaderProps) => {
  return (
    <Flex px={'9'} py={'6'} gap={'4'} grow={'1'}>
      {children}
    </Flex>
  );
};
