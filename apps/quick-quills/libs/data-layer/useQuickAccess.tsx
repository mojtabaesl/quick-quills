import { QueryClient, useQuery } from '@tanstack/react-query';
import { getBooks } from './BooksFetcher';

export const useQuickAccessTodoPrefetchQuery = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['books', 'todo', 'quickAccess'],
    queryFn: () =>
      getBooks({
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

export const useQuickAccessTodoQuery = () => {
  return useQuery({
    queryKey: ['books', 'todo', 'quickAccess'],
    queryFn: () =>
      getBooks({
        params: {
          isPurchased: 'false',
          _sort: 'id',
          _order: 'desc',
          _limit: '3',
        },
      }),
  });
};

export const useQuickAccessPurchasedPrefetchQuery = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['books', 'purchased', 'quickAccess'],
    queryFn: () =>
      getBooks({
        params: {
          isPurchased: 'true',
          _sort: 'purchasedDate',
          _order: 'desc',
          _limit: '3',
        },
      }),
  });
  return queryClient;
};

export const useQuickAccessPurchasedQuery = () => {
  return useQuery({
    queryKey: ['books', 'purchased', 'quickAccess'],
    queryFn: () =>
      getBooks({
        params: {
          isPurchased: 'true',
          _sort: 'purchasedDate',
          _order: 'desc',
          _limit: '3',
        },
      }),
  });
};
