'use client';

import { LoaderIcon } from '@/ui/icons';
import { getToken } from '@/utils';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
const Rotate = styled(() => <LoaderIcon strokeWidth={2.5} />)`
  animation: ${rotate} 1s linear infinite;
  color: ${getToken('color.fg.muted')};
`;

export const Loading = () => {
  return <Rotate />;
};
