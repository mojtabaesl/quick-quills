'use client';

import { Button } from '@/ui/components/Button';
import { IconButton } from '@/ui/components/IconButton';
import { Stack } from '@/ui/components/Stack';
import { TrashIcon } from '@/ui/icons';
import { Flex } from '@radix-ui/themes';
import { BookCard } from 'app/_components/BookCard';
import { useTodoBooksQuery } from '@/data-layer/useTodoBooks';
interface T {
  actions: Record<'done', string>;
}

interface TodoListProps {
  messages: T;
}

export const TodoList = ({ messages: t }: TodoListProps) => {
  const { data, isLoading, isError, error } = useTodoBooksQuery();

  if (isError) return <>{error.message}</>;
  if (isLoading) return <>Loading ...</>;

  return (
    <Stack px={'9'} gap={'4'} grow={'1'} asChild>
      <section>
        {data?.map(({ title, id, author }) => (
          <BookCard key={id}>
            <BookCard.Info title={title} author={author} />
            <Flex gap={'6'} align={'center'}>
              <IconButton variant="ghost" color="red">
                <TrashIcon />
              </IconButton>
              <Button color="purple">{t.actions.done}</Button>
            </Flex>
          </BookCard>
        ))}
      </section>
    </Stack>
  );
};
