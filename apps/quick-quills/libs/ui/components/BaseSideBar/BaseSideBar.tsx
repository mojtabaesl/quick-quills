import { Text } from '@radix-ui/themes';
import type { NavigationProps } from '../Navigation';
import { StyledAside } from './StyledAside';
import { UserAvatar } from '../UserAvatar';
import { Navigation } from '../Navigation/';
import { useTranslations } from 'next-intl';
import { Stack } from '../Stack';

type BaseSideBarProps = NavigationProps;

export const BaseSideBar = ({ links }: BaseSideBarProps) => {
  const t = useTranslations();
  return (
    <StyledAside>
      <Stack align={'center'} gap={'4'}>
        <UserAvatar />
        <Text as="p" size="3">
          {t('welcome')}
        </Text>
      </Stack>
      <Navigation links={links} />
    </StyledAside>
  );
};
