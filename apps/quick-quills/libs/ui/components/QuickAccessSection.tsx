'use client';

import { getToken } from '@/utils';
import type { ReactNode } from 'react';
import styled from 'styled-components';
import { Stack } from './Stack';

interface QuickAccessSectionProps {
  children: ReactNode;
}

const StyledStack = styled(Stack)`
  border-top: 1px solid ${getToken('color.border.primary')};
  height: 185px;
`;

export const QuickAccessSection = ({ children }: QuickAccessSectionProps) => {
  return (
    <StyledStack px={'9'} py={'5'} justify={'between'} asChild>
      <section>{children}</section>
    </StyledStack>
  );
};
