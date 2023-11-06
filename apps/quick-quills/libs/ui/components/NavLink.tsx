'use client';

import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import { useMemo } from 'react';
import { comparePaths } from '../../utils/path';
import styled from 'styled-components';
import { getToken } from '@/utils';
import { Flex, Text } from '@radix-ui/themes';

interface Props {
  href: string;
  icon?: React.ReactNode;
  label: string;
}

const StyledLink = styled(({ isActive, ...rest }) => <Link {...rest} />)<{
  isActive: boolean;
}>`
  background: ${({ isActive }) =>
    isActive ? getToken('color.bg.active') : null};
  color: ${({ isActive }) =>
    isActive ? getToken('color.fg.primary') : getToken('color.fg.muted')};
  border-radius: 5px;
  text-decoration: none;
  transition-property: color, background-color;
  transition-duration: 0.25s;
`;

export const NavLink = ({ href, icon, label }: Props) => {
  const selectedLayoutSegment = useSelectedLayoutSegment() ?? '';

  const isActive: boolean = useMemo(
    () => comparePaths(href, selectedLayoutSegment) === 0,
    [href, selectedLayoutSegment]
  );

  return (
    <StyledLink href={href} isActive={isActive}>
      <Flex gap={'4'} px={'4'} py={'3'}>
        {icon}
        <Text size={'3'} weight={'medium'}>
          {label}
        </Text>
      </Flex>
    </StyledLink>
  );
};
