'use client';

import { useQuickAccessPurchasedQuery } from '@/data-layer/hooks';
import { Button } from '@/ui/components/Button';
import { Flex } from '@radix-ui/themes';
import { BookCard } from 'app/_components/BookCard';

interface T {
  actions: Record<'return' | 'done', string>;
  author: string;
}

interface QuickAccessListProps {
  messages: T;
}

export const QuickAccessInventoryList = ({
  messages,
}: QuickAccessListProps) => {
  const { data, isLoading, isError } = useQuickAccessPurchasedQuery();

  if (isError) return <>Error ...</>;
  if (isLoading) return <>Loading ...</>;

  return (
    <Flex gap={'3'}>
      {data?.map(({ title, id, author }) => (
        <BookCard key={id} style={{ maxWidth: '600px' }}>
          <BookCard.Info
            title={title}
            author={author}
            messages={{ author: messages.author }}
          />
          <Button color="gray" variant="soft">
            {messages.actions.return}
          </Button>
        </BookCard>
      ))}
    </Flex>
  );
};
