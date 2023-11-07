import { Flex, Text } from '@radix-ui/themes';
import type { NavigationProps } from '../Navigation';
import { StyledAside } from './StyledAside';
import { UserAvatar } from '../UserAvatar';
import { Navigation } from '../Navigation/';
import { useTranslations } from 'next-intl';

type BaseSideBarProps = NavigationProps;

export const BaseSideBar = ({ links }: BaseSideBarProps) => {
  const t = useTranslations();
  return (
    <StyledAside>
      <Flex direction={'column'} align={'center'} gap={'4'}>
        <UserAvatar />
        <Text as="p" size="3">
          {t('welcome')}
        </Text>
      </Flex>
      <Navigation links={links} />
    </StyledAside>
  );
};
