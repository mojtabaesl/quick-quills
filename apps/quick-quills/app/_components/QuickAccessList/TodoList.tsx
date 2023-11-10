'use client';

import { useQuickAccessPurchasedQuery } from '@/data-layer/useQuickAccess';
import { Button } from '@/ui/components/Button';
import { Loading } from '@/ui/components/Loading';
import { Flex } from '@radix-ui/themes';
import { BookCard } from 'app/_components/BookCard';

interface T {
  actions: Record<'return', string>;
}

interface QuickAccessListProps {
  messages: T;
}

export const QuickAccessTodoList = ({ messages: t }: QuickAccessListProps) => {
  const { data, isLoading, isError, error } = useQuickAccessPurchasedQuery();

  if (isError) return <>{error.message}</>;
  if (isLoading) return <Loading />;

  return (
    <Flex gap={'3'}>
      {data?.map(({ title, id, author }) => (
        <BookCard key={id}>
          <BookCard.Info title={title} author={author} />
          <Button color="gray" variant="soft">
            {t.actions.return}
          </Button>
        </BookCard>
      ))}
    </Flex>
  );
};
