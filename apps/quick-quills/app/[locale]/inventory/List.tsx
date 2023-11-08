'use client';

import { usePurchasedBooksQuery } from '@/data-layer/usePurchasedBooks';
import { Button } from '@/ui/components/Button';
import { IconButton } from '@/ui/components/IconButton';
import { Stack } from '@/ui/components/Stack';
import { TrashIcon } from '@/ui/icons';
import { Flex } from '@radix-ui/themes';
import { BookCard } from 'app/_components/BookCard';

interface T {
  actions: Record<'return', string>;
}

interface InventoryListProps {
  messages: T;
}

export const InventoryList = ({ messages: t }: InventoryListProps) => {
  const { data, isLoading, isError } = usePurchasedBooksQuery();

  if (isError) return <>Error ...</>;
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
              <Button color="purple">{t.actions.return}</Button>
            </Flex>
          </BookCard>
        ))}
      </section>
    </Stack>
  );
};
