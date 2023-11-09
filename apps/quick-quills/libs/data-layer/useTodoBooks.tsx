import { QueryClient, useInfiniteQuery } from '@tanstack/react-query';
import { booksFetcher } from './BooksFetcher';

export const useTodoBooksInfiniteQuery = () => {
  return useInfiniteQuery({
    queryKey: ['books', 'todo'],
    queryFn: ({ pageParam }) =>
      booksFetcher({
        params: {
          isPurchased: 'false',
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

export const useTodoBooksPrefetchInfiniteQuery = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchInfiniteQuery({
    queryKey: ['books', 'todo'],
    queryFn: () =>
      booksFetcher({
        params: {
          isPurchased: 'false',
          _limit: '15',
        },
      }),
    initialPageParam: 1,
  });
  return queryClient;
};
