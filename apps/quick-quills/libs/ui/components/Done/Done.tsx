'use client';

import { CheckCircleIcon } from '@/ui/icons';
import { getToken } from '@/utils';
import { Flex } from '@radix-ui/themes';
import styled from 'styled-components';
import { If } from '../If';

interface DoneProps {
  done: boolean;
}

const StyledFlex = styled(Flex)`
  color: ${getToken('color.brand')};
`;

export const Done = ({ done }: DoneProps) => {
  return (
    <StyledFlex justify={'center'} align={'center'} grow={'0'} shrink={'0'}>
      <If condition={done}>
        <CheckCircleIcon />
      </If>
    </StyledFlex>
  );
};
