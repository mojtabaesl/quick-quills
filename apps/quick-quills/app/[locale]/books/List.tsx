'use client';

import { useAllBooksInfiniteQuery } from '@/data-layer/useAllBooks';
import { Button } from '@/ui/components/Button';
import { Loading } from '@/ui/components/Loading';
import { Stack } from '@/ui/components/Stack';
import { Flex } from '@radix-ui/themes';
import { BookCard } from 'app/_shared/BookCard';
import { DeleteBookDialog } from 'app/_shared/DeleteBook';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

interface T {
  actions: Record<'done' | 'return', string>;
}

interface BookListProps {
  messages: T;
}

export const BooksList = ({ messages: t }: BookListProps) => {
  const { ref, inView } = useInView();

  const { data, isError, isLoading, fetchNextPage, hasNextPage, isFetching } =
    useAllBooksInfiniteQuery();

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage]);

  if (isError) return <>Error ...</>;
  if (isLoading) return <Loading />;

  return (
    <Stack px={'9'} pb={'9'} gap={'4'} grow={'1'} asChild>
      <section>
        {data?.pages.map((page) =>
          page?.map(({ isPurchased, title, id, author }, i) => (
            <BookCard key={id} ref={page.length === i + 1 ? ref : undefined}>
              <BookCard.Info title={title} author={author} />
              <Flex gap={'6'} align={'center'}>
                <DeleteBookDialog
                  id={id}
                  author={author}
                  title={title}
                  isPurchased={isPurchased}
                />
                {isPurchased ? (
                  <Button color="purple">{t.actions.return}</Button>
                ) : (
                  <Button color="purple">{t.actions.done}</Button>
                )}
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
