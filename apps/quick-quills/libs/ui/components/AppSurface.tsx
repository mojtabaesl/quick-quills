'use client';

import styled from 'styled-components';
import { getToken } from '@/utils';
import { Flex } from '@radix-ui/themes';

export const AppSurface = styled(Flex)`
  background-color: ${getToken('color.bg.surface')};
  color: ${getToken('color.fg.primary')};
  height: 100vh;
`;
