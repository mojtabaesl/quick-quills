import { QueryClient, useQuery } from '@tanstack/react-query';
import { bookService } from '../services/book';
import { keys } from '../react-query/keys';

export const useQuickAccessTodoPrefetchQuery = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: keys.quickAccessTodo(),
    queryFn: () =>
      bookService.getAll({
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
    queryKey: keys.quickAccessTodo(),
    queryFn: () =>
      bookService.getAll({
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
    queryKey: keys.quickAccessPurchased(),
    queryFn: () =>
      bookService.getAll({
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
    queryKey: keys.quickAccessPurchased(),
    queryFn: () =>
      bookService.getAll({
        params: {
          isPurchased: 'true',
          _sort: 'purchasedDate',
          _order: 'desc',
          _limit: '3',
        },
      }),
  });
};
