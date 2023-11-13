import type { UpdateBookProps } from '../services/book';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { bookService } from '../services/book';
import { debug } from '@/debug';
import { keys } from '../react-query/keys';

export const useUpdateBookMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: keys.updateBook(),
    onError: ({ message }) => {
      debug.error('All', { message });
    },
    mutationFn: (props: UpdateBookProps) => bookService.update(props),
    onSuccess: ({ title }) => {
      debug.log('All', `Book ${title} has been updated`);
      queryClient.invalidateQueries({ queryKey: keys.all() });
    },
  });
};
