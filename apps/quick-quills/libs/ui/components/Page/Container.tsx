import type { ReactNode } from 'react';
import type { StackProps } from '../Stack';
import { Stack } from '../Stack';

interface ContainerProps extends StackProps {
  children: ReactNode;
}

export const Container = ({ children, ...rest }: ContainerProps) => {
  return (
    <Stack px={'9'} {...rest}>
      {children}
    </Stack>
  );
};
