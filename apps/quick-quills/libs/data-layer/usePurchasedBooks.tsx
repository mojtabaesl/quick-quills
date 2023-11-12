import type { Pagination } from './BooksFetcher';
import { QueryClient, useInfiniteQuery } from '@tanstack/react-query';
import { getBooks } from './BooksFetcher';
import type { Book } from '@/schema/book';

export interface HookParams {
  params?: Pagination;
}

const getParams = ({
  query,
  pageParam,
}: {
  pageParam: number;
  query?: string;
}) => {
  const baseParams: Pagination & Partial<Record<keyof Book, string>> = {
    isPurchased: 'true',
    _sort: 'purchasedDate',
    _order: 'desc',
    _page: pageParam.toString(),
    _limit: '15',
    q: query,
  };
  return baseParams;
};

export const usePurchasedBooksInfiniteQuery = ({
  query,
  enabled,
}: {
  query: string;
  enabled: boolean;
}) => {
  return useInfiniteQuery({
    queryKey: ['books', 'purchased', query],
    queryFn: ({ pageParam }) =>
      getBooks({
        params: { ...getParams({ pageParam, query }) },
      }),
    getNextPageParam: (lastPage, allPages) =>
      lastPage.length === 15 ? allPages.length + 1 : undefined,
    initialPageParam: 1,
    enabled,
  });
};

export const usePurchasedBooksPrefetchInfiniteQuery = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchInfiniteQuery({
    queryKey: ['books', 'purchased'],
    queryFn: ({ pageParam }) =>
      getBooks({
        params: { ...getParams({ pageParam }) },
      }),
    initialPageParam: 1,
  });
  return queryClient;
};
