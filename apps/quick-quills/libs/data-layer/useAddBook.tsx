import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addBook } from './BooksFetcher';
import type { Book } from '@/schema/book';

interface AddBookMutationProps {
  body: Pick<Book, 'title' | 'author'>;
}

export const useAddBookMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['book', 'add'],
    mutationFn: ({ body }: AddBookMutationProps) =>
      addBook({ body: { ...body, isPurchased: false, purchasedDate: null } }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['books', 'todo'] });
    },
  });
};
