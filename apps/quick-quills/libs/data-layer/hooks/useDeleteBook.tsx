import { useMutation, useQueryClient } from '@tanstack/react-query';
import { bookService } from '../services/book';
import { debug } from '@/debug';
import { keys } from '../react-query/keys';

export interface UseDeleteBookProps {
  id: string;
}

export const useDeleteBook = ({ id }: UseDeleteBookProps) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => bookService.delete({ id }),
    mutationKey: keys.deleteBook(),
    onError: ({ message }) => {
      debug.error('All', { message });
    },
    onSuccess: () => {
      debug.log('All', `Book has been deleted`);
      queryClient.invalidateQueries({
        queryKey: [...keys.all()],
      });
    },
  });
};
