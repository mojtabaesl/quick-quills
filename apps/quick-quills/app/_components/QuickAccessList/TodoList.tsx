'use client';

import { useQuickAccessTodoQuery } from '@/data-layer/hooks';
import { Button } from '@/ui/components/Button';
import { Loading } from '@/ui/components/Loading';
import { Flex } from '@radix-ui/themes';
import { BookCard } from 'app/_components/BookCard';

interface T {
  actions: Record<'done', string>;
  author: string;
}

interface QuickAccessListProps {
  messages: T;
}

export const QuickAccessTodoList = ({ messages }: QuickAccessListProps) => {
  const { data, isLoading, isError } = useQuickAccessTodoQuery();

  if (isError) return <>Error ...</>;
  if (isLoading) return <Loading />;

  return (
    <Flex gap={'3'}>
      {data?.map(({ title, id, author }) => (
        <BookCard key={id}>
          <BookCard.Info
            title={title}
            author={author}
            messages={{ author: messages.author }}
          />
          <Button color="gray" variant="soft">
            {messages.actions.done}
          </Button>
        </BookCard>
      ))}
    </Flex>
  );
};
