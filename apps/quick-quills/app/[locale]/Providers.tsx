'use client';

import { StyledComponentsRegistry } from './Registry';
import { Theme as RadixUiTheme } from '@radix-ui/themes';
import type { ReactNode } from 'react';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import { theme } from '@/ui/styles/styled-theme';

interface Props {
  children: ReactNode;
}

export function Providers({ children }: Props): JSX.Element {
  return (
    <StyledComponentsRegistry>
      <RadixUiTheme appearance="dark">
        <StyledComponentsThemeProvider theme={theme}>
          {children}
        </StyledComponentsThemeProvider>
      </RadixUiTheme>
    </StyledComponentsRegistry>
  );
}
