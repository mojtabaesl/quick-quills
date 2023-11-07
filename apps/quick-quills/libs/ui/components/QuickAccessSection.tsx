'use client';

import { getToken } from '@/utils';
import { Flex } from '@radix-ui/themes';
import type { ReactNode } from 'react';
import styled from 'styled-components';

interface QuickAccessSectionProps {
  children: ReactNode;
}

const StyleFlex = styled(Flex)`
  border-top: 1px solid ${getToken('color.border.primary')};
  height: 185px;
`;

export const QuickAccessSection = ({ children }: QuickAccessSectionProps) => {
  return (
    <StyleFlex px={'9'} py={'3'} asChild>
      <section>{children}</section>
    </StyleFlex>
  );
};
