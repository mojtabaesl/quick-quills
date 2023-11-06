'use client';

import styled from 'styled-components';
import type { NavigationProps } from './Navigation';
import { Navigation } from './Navigation';
import { getToken } from '@/utils';
import { UserAvatar } from './UserAvatar';
import { Flex, Text } from '@radix-ui/themes';

type BaseSideBarProps = NavigationProps;

const StyledAside = styled.aside`
  min-width: 300px;
  border-right: 1px solid ${getToken('color.border.primary')};
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 80px;
`;

export const BaseSideBar = ({ links }: BaseSideBarProps) => {
  return (
    <StyledAside>
      <Flex direction={'column'} align={'center'} gap={'4'}>
        <UserAvatar />
        <Text as="p" size="3">
          Welcome Neville
        </Text>
      </Flex>
      <Navigation links={links} />
    </StyledAside>
  );
};
