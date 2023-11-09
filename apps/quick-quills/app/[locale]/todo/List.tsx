'use client';

import { Button } from '@/ui/components/Button';
import { IconButton } from '@/ui/components/IconButton';
import { Stack } from '@/ui/components/Stack';
import { TrashIcon } from '@/ui/icons';
import { Flex } from '@radix-ui/themes';
import { BookCard } from 'app/_shared/BookCard';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { Loading } from '@/ui/components/Loading';
import { useTodoBooksInfiniteQuery } from '@/data-layer/useTodoBooks';

interface T {
  actions: Record<'done', string>;
}

interface TodoListProps {
  messages: T;
}

export const TodoList = ({ messages: t }: TodoListProps) => {
  const { ref, inView } = useInView();

  const { data, isError, isLoading, fetchNextPage, hasNextPage, isFetching } =
    useTodoBooksInfiniteQuery();

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage]);

  if (isError) return <>Error ...</>;
  if (isLoading) return <>Loading ...</>;

  return (
    <Stack px={'9'} gap={'4'} grow={'1'} asChild>
      <section>
        {data?.pages.map((page) =>
          page?.map(({ title, id, author }, i) => (
            <BookCard key={id} ref={page.length === i + 1 ? ref : undefined}>
              <BookCard.Info title={title} author={author} />
              <Flex gap={'6'} align={'center'}>
                <IconButton variant="ghost" color="red">
                  <TrashIcon />
                </IconButton>
                <Button color="purple">{t.actions.done}</Button>
              </Flex>
            </BookCard>
          ))
        )}
        {isFetching ? (
          <Flex justify={'center'} py={'5'}>
            <Loading />
          </Flex>
        ) : null}
      </section>
    </Stack>
  );
};
