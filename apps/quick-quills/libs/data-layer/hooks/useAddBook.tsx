import { useMutation, useQueryClient } from '@tanstack/react-query';

import type { Book } from '@/schema/book';
import { bookService } from '../services/book';
import { debug } from '@/debug';
import { keys } from '../react-query/keys';

interface AddBookMutationProps {
  body: Pick<Book, 'title' | 'author'>;
}

export const useAddBookMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: keys.addBook(),
    onError: ({ message }) => {
      debug.error('All', { message });
    },
    mutationFn: ({ body }: AddBookMutationProps) =>
      bookService.add({
        body: { ...body, isPurchased: false, purchasedDate: null },
      }),
    onSuccess: ({ title }) => {
      debug.log('All', `Book ${title} has been added`);
      queryClient.invalidateQueries({ queryKey: ['books', 'todo'] });
    },
  });
};
