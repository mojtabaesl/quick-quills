import { NavLink } from '../NavLink';
import { useTranslations } from 'next-intl';
import { StyledUl } from './StyledUl';
import type { ReactNode } from 'react';
import type { Routes } from '@/routes/routes';
import { Stack } from '../Stack';

export interface NavLink {
  to: Routes;
  icon: ReactNode;
  label: string;
}

export interface NavigationProps {
  links: NavLink[];
}

export const Navigation = ({ links }: NavigationProps) => {
  const t = useTranslations('navigation');
  return (
    <nav>
      <Stack gap={'2'} asChild>
        <StyledUl>
          {links.map(({ to, icon, label }) => (
            <NavLink
              href={to}
              label={t(label)}
              icon={icon}
              key={to + '-' + label}
            />
          ))}
        </StyledUl>
      </Stack>
    </nav>
  );
};
