'use client';

import { getToken } from '@/utils';
import styled from 'styled-components';

export const StyledAside = styled.aside`
  min-width: 300px;
  border-right: 1px solid ${getToken('color.border.primary')};
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 80px;
`;
