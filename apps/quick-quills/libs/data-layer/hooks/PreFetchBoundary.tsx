import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import type { ReactNode } from 'react';
import type { QueryClient } from '@tanstack/react-query';

interface PreFetchBoundaryProps {
  children: ReactNode;
  preFetchedQueryClientFN: () => Promise<QueryClient>;
}

export const PreFetchBoundary = async ({
  children,
  preFetchedQueryClientFN,
}: PreFetchBoundaryProps) => {
  const queryClient = await preFetchedQueryClientFN();

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {children}
    </HydrationBoundary>
  );
};
