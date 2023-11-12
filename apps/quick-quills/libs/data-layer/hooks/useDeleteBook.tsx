import { useMutation, useQueryClient } from '@tanstack/react-query';
import { bookService } from '../services/book';
import { debug } from '@/debug';

export interface UseDeleteBookProps {
  id: string;
  invalidateQueries?: 'purchased' | 'todo';
}

export const useDeleteBook = ({
  id,
  invalidateQueries,
}: UseDeleteBookProps) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => bookService.delete({ id }),
    onError: ({ message }) => {
      debug.error('All', { message });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['books', invalidateQueries] });
    },
  });
};
