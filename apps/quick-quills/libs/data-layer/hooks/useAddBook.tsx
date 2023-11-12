import { useMutation, useQueryClient } from '@tanstack/react-query';

import type { Book } from '@/schema/book';
import { bookService } from '../services/book';
import { debug } from '@/debug';

interface AddBookMutationProps {
  body: Pick<Book, 'title' | 'author'>;
}

export const useAddBookMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['book', 'add'],
    onError: ({ message }) => {
      debug.error('All', { message });
    },
    mutationFn: ({ body }: AddBookMutationProps) =>
      bookService.add({
        body: { ...body, isPurchased: false, purchasedDate: null },
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['books', 'todo'] });
    },
  });
};