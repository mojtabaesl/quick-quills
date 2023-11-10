import NextLink from 'next-intl/link';
import type { Routes } from './routes';

interface PageLinkProps {
  href: Routes;
  children?: React.ReactNode;
}

export function PageLink(props: PageLinkProps) {
  return <NextLink {...props} />;
}
