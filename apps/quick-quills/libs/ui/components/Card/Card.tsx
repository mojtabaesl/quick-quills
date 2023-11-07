'use client';

import { getToken } from '@/utils';
import { Flex } from '@radix-ui/themes';
import type { FlexProps } from '@radix-ui/themes/dist/cjs/components/flex';
import type { ReactNode } from 'react';
import styled from 'styled-components';

interface CardProps extends FlexProps {
  children: ReactNode;
}

const StyledFlex = styled(Flex)`
  background-color: ${getToken('color.bg.secondary')};
  height: max-content;
  border-radius: 5px;
`;

export const Card = ({ children, ...rest }: CardProps) => {
  return (
    <StyledFlex grow={'1'} justify={'between'} py={'2'} px={'5'} {...rest}>
      {children}
    </StyledFlex>
  );
};
