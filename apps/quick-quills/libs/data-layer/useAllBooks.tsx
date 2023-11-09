import { QueryClient, useInfiniteQuery } from '@tanstack/react-query';
import { booksFetcher } from './BooksFetcher';

export const useAllBooksInfiniteQuery = () => {
  return useInfiniteQuery({
    queryKey: ['books'],
    queryFn: ({ pageParam }) =>
      booksFetcher({
        params: {
          _page: pageParam.toString(),
          _limit: '15',
        },
      }),
    getNextPageParam: (lastPage, allPages) =>
      lastPage.length === 15 ? allPages.length + 1 : undefined,
    initialPageParam: 1,
  });
};

export const useAllBooksPrefetchInfiniteQuery = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchInfiniteQuery({
    queryKey: ['books'],
    queryFn: () =>
      booksFetcher({
        params: {
          _limit: '15',
        },
      }),
    initialPageParam: 1,
  });
  return queryClient;
};
