'use client';

import { getToken } from '@/utils';
import type { ReactNode } from 'react';
import styled from 'styled-components';
import { Page } from '../Page';

interface QuickAccessSectionProps {
  children: ReactNode;
}

const StyledStack = styled((props) => <Page.Container {...props} />)`
  border-top: 1px solid ${getToken('color.border.primary')};
  max-height: 190px;
`;

export const QuickAccessSection = ({ children }: QuickAccessSectionProps) => {
  return (
    <StyledStack py={'5'} gap={'4'} asChild>
      <section>{children}</section>
    </StyledStack>
  );
};
