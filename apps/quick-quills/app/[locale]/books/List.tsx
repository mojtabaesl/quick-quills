'use client';

import { useAllBooksQuery } from '@/data-layer/useAllBooks';
import { Button } from '@/ui/components/Button';
import { IconButton } from '@/ui/components/IconButton';
import { Stack } from '@/ui/components/Stack';
import { TrashIcon } from '@/ui/icons';
import { Flex } from '@radix-ui/themes';
import { BookCard } from 'app/_components/BookCard';

interface T {
  actions: Record<'done' | 'return', string>;
}

interface BookListProps {
  messages: T;
}

export const BooksList = ({ messages: t }: BookListProps) => {
  const { data, isLoading, isError } = useAllBooksQuery();

  if (isError) return <>Error ...</>;
  if (isLoading) return <>Loading ...</>;

  return (
    <Stack px={'9'} gap={'4'} grow={'1'} asChild>
      <section>
        {data?.map(({ title, id, author, isPurchased }) => (
          <BookCard key={id}>
            <BookCard.Info title={title} author={author} />
            <Flex gap={'6'} align={'center'}>
              <IconButton variant="ghost" color="red">
                <TrashIcon />
              </IconButton>
              {isPurchased ? (
                <Button color="purple">{t.actions.return}</Button>
              ) : (
                <Button color="purple">{t.actions.done}</Button>
              )}
            </Flex>
          </BookCard>
        ))}
      </section>
    </Stack>
  );
};
