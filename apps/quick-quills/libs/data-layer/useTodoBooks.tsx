import { bookSchema } from '@/schema/book';
import { QueryClient, useQuery } from '@tanstack/react-query';

export const getTodoBooks = async () => {
  const res = await fetch('http://localhost:3333/api/books?isPurchased=false');
  if (!res.ok) {
    throw new Error('Network Error');
  }
  return bookSchema.array().parse(await res.json());
};

const queryKey = ['books', 'todo'];

export const useTodoBooksQuery = () => {
  return useQuery({
    queryKey,
    queryFn: getTodoBooks,
  });
};

export const useTodoBooksPrefetchQuery = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey,
    queryFn: getTodoBooks,
  });
  return queryClient;
};
