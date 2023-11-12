import type { Book } from '@/schema/book';
import { bookService, type Pagination } from '../services/book';
import { QueryClient, useInfiniteQuery } from '@tanstack/react-query';
import { keys } from '../react-query/keys';

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
    _page: pageParam.toString(),
    _limit: '15',
    q: query,
  };
  return baseParams;
};

export const useAllBooksInfiniteQuery = ({
  query,
  enabled,
}: {
  query: string;
  enabled: boolean;
}) => {
  return useInfiniteQuery({
    queryKey: keys.filteredAll(query),
    queryFn: ({ pageParam }) =>
      bookService.getAll({
        params: { ...getParams({ pageParam, query }) },
      }),
    getNextPageParam: (lastPage, allPages) =>
      lastPage.length === 15 ? allPages.length + 1 : undefined,
    initialPageParam: 1,
    enabled,
  });
};

export const useAllBooksPrefetchInfiniteQuery = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchInfiniteQuery({
    queryKey: keys.all(),
    queryFn: ({ pageParam }) =>
      bookService.getAll({
        params: { ...getParams({ pageParam }) },
      }),
    initialPageParam: 1,
  });
  return queryClient;
};
