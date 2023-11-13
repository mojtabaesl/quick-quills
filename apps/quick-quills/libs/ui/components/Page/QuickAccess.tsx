import { QuickAccessSection } from '@/ui/components/QuickAccess/QuickAccessSection';
import type { HTMLAttributes, ReactNode } from 'react';

interface PageQuickAccessProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const PageQuickAccess = ({
  children,
  ...rest
}: PageQuickAccessProps) => {
  return <QuickAccessSection {...rest}>{children}</QuickAccessSection>;
};
