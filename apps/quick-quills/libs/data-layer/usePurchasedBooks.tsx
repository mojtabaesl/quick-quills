import { bookSchema } from '@/schema/book';
import { QueryClient, useQuery } from '@tanstack/react-query';

export const getPurchasedBooks = async () => {
  const res = await fetch('http://localhost:3333/api/books?isPurchased=true');
  if (!res.ok) {
    throw new Error('Network Error');
  }
  return bookSchema.array().parse(await res.json());
};

const queryKey = ['books', 'purchased'];

export const usePurchasedBooksQuery = () => {
  return useQuery({
    queryKey,
    queryFn: getPurchasedBooks,
  });
};

export const usePurchasedBooksPrefetchQuery = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey,
    queryFn: getPurchasedBooks,
  });
  return queryClient;
};
