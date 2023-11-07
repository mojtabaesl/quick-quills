'use client';

import { useSelectedLayoutSegment } from 'next/navigation';
import { useMemo } from 'react';
import { comparePaths } from '../../../utils/path';
import { Flex, Text } from '@radix-ui/themes';
import { StyledLink } from './StyledLink';
import type { Routes } from '@/router/routes';

interface Props {
  href: Routes;
  icon?: React.ReactNode;
  label: string;
}

export const NavLink = ({ href, icon, label }: Props) => {
  const selectedLayoutSegment = useSelectedLayoutSegment() ?? '';

  const isActive: boolean = useMemo(
    () => comparePaths(href, selectedLayoutSegment) === 0,
    [href, selectedLayoutSegment]
  );

  return (
    <li {...(isActive ? { 'aria-current': 'page' } : {})}>
      <Flex gap={'4'} px={'4'} py={'3'} asChild>
        <StyledLink href={href} isActive={isActive}>
          {icon}
          <Text size={'3'} weight={'medium'}>
            {label}
          </Text>
        </StyledLink>
      </Flex>
    </li>
  );
};
