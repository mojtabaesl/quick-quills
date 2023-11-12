import type { Book } from '@/schema/book';
import { bookService, type Pagination } from '../services/book';
import { QueryClient, useInfiniteQuery } from '@tanstack/react-query';

const getParams = ({
  query,
  pageParam,
}: {
  pageParam: number;
  query?: string;
}) => {
  const baseParams: Pagination & Partial<Record<keyof Book, string>> = {
    isPurchased: 'false',
    _sort: 'id',
    _order: 'desc',
    _page: pageParam.toString(),
    _limit: '15',
    q: query,
  };
  return baseParams;
};

export const useTodoBooksInfiniteQuery = ({
  query,
  enabled,
}: {
  query: string;
  enabled: boolean;
}) => {
  return useInfiniteQuery({
    queryKey: ['books', 'todo', query],
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

export const useTodoBooksPrefetchInfiniteQuery = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchInfiniteQuery({
    queryKey: ['books', 'todo'],
    queryFn: ({ pageParam }) =>
      bookService.getAll({
        params: { ...getParams({ pageParam }) },
      }),
    initialPageParam: 1,
  });
  return queryClient;
};
