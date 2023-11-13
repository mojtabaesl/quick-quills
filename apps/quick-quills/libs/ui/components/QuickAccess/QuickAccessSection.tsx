'use client';

import { getToken } from '@/utils';
import type { HtmlHTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';
import { Page } from '../Page';

interface QuickAccessSectionProps extends HtmlHTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const StyledStack = styled((props) => <Page.Container {...props} />)`
  border-top: 1px solid ${getToken('color.border.primary')};
  max-height: 190px;
`;

export const QuickAccessSection = ({
  children,
  ...rest
}: QuickAccessSectionProps) => {
  return (
    <StyledStack py={'5'} gap={'4'} {...rest} asChild>
      <section>{children}</section>
    </StyledStack>
  );
};
