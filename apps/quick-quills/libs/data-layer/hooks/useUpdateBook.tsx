import type { UpdateBookProps } from '../services/book';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { bookService } from '../services/book';
import { debug } from '@/debug';

export const useUpdateBookMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['book'],
    onError: ({ message }) => {
      debug.error('All', { message });
    },
    mutationFn: (props: UpdateBookProps) => bookService.update(props),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['books'] });
    },
  });
};
