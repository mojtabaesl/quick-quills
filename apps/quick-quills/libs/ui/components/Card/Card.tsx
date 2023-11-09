'use client';

import { getToken } from '@/utils';
import { Flex } from '@radix-ui/themes';
import type { FlexProps } from '@radix-ui/themes/dist/cjs/components/flex';
import type { Ref } from 'react';
import { forwardRef, type ReactNode } from 'react';
import styled from 'styled-components';

interface CardProps extends FlexProps {
  children: ReactNode;
}

const StyledFlex = styled(Flex)`
  background-color: ${getToken('color.bg.secondary')};
  height: max-content;
  border-radius: 5px;
  &:hover {
    background-color: ${getToken('color.bg.hover.2')};
  }
  transition-property: all;
  transition-duration: 0.25s;
`;

export const Card = forwardRef(
  ({ children, ...rest }: CardProps, ref: Ref<HTMLDivElement>) => {
    return (
      <StyledFlex
        grow={'1'}
        justify={'between'}
        py={'2'}
        px={'5'}
        ref={ref}
        {...rest}
      >
        {children}
      </StyledFlex>
    );
  }
);

Card.displayName = 'Card';
