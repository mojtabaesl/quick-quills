'use client';

import { NavLink } from './NavLink';
import type { ReactNode } from 'react';
import { Flex } from '@radix-ui/themes';

export interface Link {
  to: string;
  icon: ReactNode;
  label: string;
}

export interface NavigationProps {
  links: Link[];
}

export const Navigation = ({ links }: NavigationProps) => {
  return (
    <nav>
      <Flex direction={'column'} gap={'2'}>
        {links.map(({ to, icon, label }) => (
          <NavLink href={to} label={label} icon={icon} key={to + label} />
        ))}
      </Flex>
    </nav>
  );
};
