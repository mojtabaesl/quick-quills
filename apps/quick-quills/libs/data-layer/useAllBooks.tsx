import { bookSchema } from '@/schema/book';
import { QueryClient, useQuery } from '@tanstack/react-query';

export const getAllBooks = async () => {
  const res = await fetch('http://localhost:3333/api/books');
  if (!res.ok) {
    throw new Error('Network Error');
  }
  return bookSchema.array().parse(await res.json());
};

const queryKey = ['books'];

export const useAllBooksQuery = () => {
  return useQuery({
    queryKey,
    queryFn: getAllBooks,
  });
};

export const useAllBooksPrefetchQuery = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey,
    queryFn: getAllBooks,
  });
  return queryClient;
};
