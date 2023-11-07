import type { ReactNode } from 'react';
import '@/ui/styles/reset.css';
import '@radix-ui/themes/styles.css';
import '@/ui/styles/tokens.css';
import '@/ui/styles/radix-theme-config.css';

export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
