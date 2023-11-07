import type { LinkProps } from 'next/link';
import NextLink from 'next/link';
import type { Routes } from './routes';

interface PageLinkProps extends LinkProps {
  href: Routes;
  children?: React.ReactNode;
}

export function PageLink(props: PageLinkProps) {
  return <NextLink {...props} />;
}
