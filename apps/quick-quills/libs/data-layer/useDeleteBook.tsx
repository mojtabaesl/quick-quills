import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteBook } from './BooksFetcher';

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
    mutationFn: () => deleteBook({ id }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['books', invalidateQueries] });
    },
  });
};
