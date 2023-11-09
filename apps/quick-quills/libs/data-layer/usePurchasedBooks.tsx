import type { Pagination } from './BooksFetcher';
import { QueryClient, useInfiniteQuery } from '@tanstack/react-query';
import { booksFetcher } from './BooksFetcher';

export interface HookParams {
  params?: Pagination;
}

export const usePurchasedBooksInfiniteQuery = () => {
  return useInfiniteQuery({
    queryKey: ['books', 'purchased'],
    queryFn: ({ pageParam }) =>
      booksFetcher({
        params: {
          isPurchased: 'true',
          _sort: 'id',
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
      booksFetcher({
        params: {
          isPurchased: 'true',
          _limit: '15',
        },
      }),
    initialPageParam: 1,
  });
  return queryClient;
};
