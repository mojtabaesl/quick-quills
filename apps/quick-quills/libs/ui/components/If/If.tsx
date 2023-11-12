import type { ReactNode } from 'react';

interface IfProps {
  condition: boolean;
  children: ReactNode;
}
export const If = ({ children, condition }: IfProps) => {
  return condition ? children : undefined;
};
