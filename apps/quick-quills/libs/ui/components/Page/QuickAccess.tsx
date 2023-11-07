import { QuickAccessSection } from '@/ui/components/QuickAccessSection';
import type { ReactNode } from 'react';

interface PageQuickAccessProps {
  children: ReactNode;
}

export const PageQuickAccess = ({ children }: PageQuickAccessProps) => {
  return <QuickAccessSection>{children}</QuickAccessSection>;
};
