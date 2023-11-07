'use client';

import { NavLink } from './NavLink';
import type { ReactNode } from 'react';
import { Flex } from '@radix-ui/themes';
import styled from 'styled-components';

export interface NavLink {
  to: string;
  icon: ReactNode;
  label: string;
}

export interface NavigationProps {
  links: NavLink[];
}

const StyledUl = styled.ul`
  list-style: none;
  padding: 0;
`;

export const Navigation = ({ links }: NavigationProps) => {
  return (
    <nav>
      <Flex direction={'column'} gap={'2'} asChild>
        <StyledUl>
          {links.map(({ to, icon, label }) => (
            <li key={to + label}>
              <NavLink href={to} label={label} icon={icon} />
            </li>
          ))}
        </StyledUl>
      </Flex>
    </nav>
  );
};
