import { QueryClient, useQuery } from '@tanstack/react-query';
import { booksFetcher } from './BooksFetcher';

export const useQuickAccessTodoPrefetchQuery = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['books', 'todo', 'quickAccess'],
    queryFn: () =>
      booksFetcher({
        params: {
          isPurchased: 'false',
          _sort: 'id',
          _order: 'desc',
          _limit: '3',
        },
      }),
  });
  return queryClient;
};

export const useQuickAccessPurchasedPrefetchQuery = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['books', 'purchased', 'quickAccess'],
    queryFn: () =>
      booksFetcher({
        params: {
          isPurchased: 'true',
          _sort: 'id',
          _order: 'desc',
          _limit: '3',
        },
      }),
  });
  return queryClient;
};

export const useQuickAccessTodoQuery = () => {
  return useQuery({
    queryKey: ['books', 'todo', 'quickAccess'],
    queryFn: () =>
      booksFetcher({
        params: {
          isPurchased: 'false',
          _limit: '3',
        },
      }),
  });
};

export const useQuickAccessPurchasedQuery = () => {
  return useQuery({
    queryKey: ['books', 'purchased', 'quickAccess'],
    queryFn: () =>
      booksFetcher({
        params: {
          isPurchased: 'true',
          _limit: '3',
        },
      }),
  });
};
