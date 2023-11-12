'use client';

import { useQuickAccessPurchasedQuery } from '@/data-layer/hooks';
import { Button } from '@/ui/components/Button';
import { Flex } from '@radix-ui/themes';
import { BookCard } from 'app/_components/BookCard';

interface T {
  actions: Record<'return' | 'done', string>;
}

interface QuickAccessListProps {
  messages: T;
}

export const QuickAccessInventoryList = ({
  messages: t,
}: QuickAccessListProps) => {
  const { data, isLoading, isError } = useQuickAccessPurchasedQuery();

  if (isError) return <>Error ...</>;
  if (isLoading) return <>Loading ...</>;

  return (
    <Flex gap={'3'}>
      {data?.map(({ title, id, author }) => (
        <BookCard key={id} style={{ maxWidth: '600px' }}>
          <BookCard.Info title={title} author={author} />
          <Button color="gray" variant="soft">
            {t.actions.return}
          </Button>
        </BookCard>
      ))}
    </Flex>
  );
};
