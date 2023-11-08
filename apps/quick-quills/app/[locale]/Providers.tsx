'use client';

import { StyledComponentsRegistry } from './Registry';
import { Theme as RadixUiTheme } from '@radix-ui/themes';
import { useState, type ReactNode } from 'react';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import { theme } from '@/ui/styles/styled-theme';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

interface Props {
  children: ReactNode;
}

export function Providers({ children }: Props): JSX.Element {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 5 * 1000,
          },
        },
      })
  );

  return (
    <StyledComponentsRegistry>
      <RadixUiTheme appearance="dark" color="purple">
        <StyledComponentsThemeProvider theme={theme}>
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        </StyledComponentsThemeProvider>
      </RadixUiTheme>
    </StyledComponentsRegistry>
  );
}
