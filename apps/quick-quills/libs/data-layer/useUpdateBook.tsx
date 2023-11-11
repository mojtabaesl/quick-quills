import type { UpdateBookProps } from './BooksFetcher';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateBook } from './BooksFetcher';

export const useUpdateBookMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['book'],
    mutationFn: (props: UpdateBookProps) => updateBook(props),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['books'] });
    },
  });
};
