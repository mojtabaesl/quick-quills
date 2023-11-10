'use client';

import { Button } from '@/ui/components/Button';
import { Stack } from '@/ui/components/Stack';
import { Flex } from '@radix-ui/themes';
import { BookCard } from 'app/_components/BookCard';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { Loading } from '@/ui/components/Loading';
import { useTodoBooksInfiniteQuery } from '@/data-layer/useTodoBooks';
import { DeleteBookDialog } from 'app/_components/DeleteBook';
import { useBookMutation } from '@/data-layer/useUpdateBook';
import { EmptyState } from '@/ui/components/EmptyState';

interface T {
  actions: Record<'done', string>;
}

interface TodoListProps {
  messages: T;
}

export const TodoList = ({ messages: t }: TodoListProps) => {
  const { ref, inView } = useInView();
  const { isPending, isSuccess, mutate } = useBookMutation();
  console.log({ isPending, isSuccess });

  const { data, isError, isLoading, fetchNextPage, hasNextPage, isFetching } =
    useTodoBooksInfiniteQuery();

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage]);

  if (isError) return <>Error ...</>;
  if (isLoading) return <>Loading ...</>;
  if (data?.pages.flat().length === 0) return <EmptyState />;

  return (
    <Stack px={'9'} gap={'4'} grow={'1'} asChild>
      <section>
        {data?.pages.map((page) =>
          page?.map(({ title, id, author, isPurchased }, i) => (
            <BookCard key={id} ref={page.length === i + 1 ? ref : undefined}>
              <BookCard.Info title={title} author={author} />
              <Flex gap={'6'} align={'center'}>
                <DeleteBookDialog
                  id={id}
                  author={author}
                  title={title}
                  isPurchased={isPurchased}
                />
                <Button
                  color="purple"
                  onClick={() =>
                    mutate({
                      id: id.toString(),
                      body: {
                        isPurchased: true,
                        purchasedDate: new Date().toISOString(),
                      },
                    })
                  }
                >
                  {t.actions.done}
                </Button>
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
