'use client';

import { useQuickAccessTodoQuery } from '@/data-layer/hooks';
import { If } from '@/ui/components/If';
import { Flex, Text } from '@radix-ui/themes';
import { BookCard } from 'app/_components/BookCard';

interface T {
  actions: Record<'done' | 'return', string>;
  author: string;
  emptyList: string;
}

interface QuickAccessListProps {
  messages: T;
}

export const QuickAccessTodoList = ({ messages }: QuickAccessListProps) => {
  const { data, isLoading, isError } = useQuickAccessTodoQuery();

  if (isError) return <>Error ...</>;
  if (isLoading) return <>Loading ...</>;

  return (
    <Flex gap={'3'} grow={'1'}>
      {data?.map(({ id, ...rest }) => (
        <BookCard
          key={id}
          style={{ maxWidth: '600px' }}
          data={{ id, ...rest }}
          messages={messages}
          minimal
        />
      ))}

      <If condition={data?.length === 0}>
        <Text color="gray">{messages.emptyList}</Text>
      </If>
    </Flex>
  );
};
