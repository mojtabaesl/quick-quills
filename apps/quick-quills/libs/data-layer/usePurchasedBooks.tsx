import type { Pagination } from './BooksFetcher';
import { QueryClient, useInfiniteQuery } from '@tanstack/react-query';
import { getBooks } from './BooksFetcher';

export interface HookParams {
  params?: Pagination;
}

export const usePurchasedBooksInfiniteQuery = () => {
  return useInfiniteQuery({
    queryKey: ['books', 'purchased'],
    queryFn: ({ pageParam }) =>
      getBooks({
        params: {
          isPurchased: 'true',
          _sort: 'purchasedDate',
          _order: 'desc',
          _page: pageParam.toString(),
          _limit: '15',
        },
      }),
    getNextPageParam: (lastPage, allPages) =>
      lastPage.length === 15 ? allPages.length + 1 : undefined,
    initialPageParam: 1,
  });
};

export const usePurchasedBooksPrefetchInfiniteQuery = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchInfiniteQuery({
    queryKey: ['books', 'purchased'],
    queryFn: () =>
      getBooks({
        params: {
          isPurchased: 'true',
          _sort: 'purchasedDate',
          _order: 'desc',
          _limit: '15',
        },
      }),
    initialPageParam: 1,
  });
  return queryClient;
};
