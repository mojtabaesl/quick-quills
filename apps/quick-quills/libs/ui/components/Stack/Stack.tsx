import type { FlexProps } from '@radix-ui/themes/dist/cjs/components/flex';
import type { ReactNode } from 'react';
import { Flex } from '@radix-ui/themes';

export interface StackProps extends FlexProps {
  children: ReactNode;
}

export const Stack = ({ children, ...rest }: StackProps) => {
  return (
    <Flex direction={'column'} {...rest}>
      {children}
    </Flex>
  );
};
