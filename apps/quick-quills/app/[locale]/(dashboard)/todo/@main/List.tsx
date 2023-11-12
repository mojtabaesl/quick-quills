'use client';

import type { InfiniteData } from '@tanstack/react-query';
import type { Book } from '@/schema/book';
import { Button } from '@/ui/components/Button';
import { Stack } from '@/ui/components/Stack';
import { Flex, ScrollArea } from '@radix-ui/themes';
import { BookCard } from 'app/_components/BookCard';
import { forwardRef } from 'react';
import { Loading } from '@/ui/components/Loading';
import { DeleteBookDialog } from 'app/_components/DeleteBook';
import { useUpdateBookMutation } from '@/data-layer/useUpdateBook';
import { If } from '@/ui/components/If';

interface T {
  actions: Record<'done', string>;
}

export type InfiniteRef = (node?: Element | null | undefined) => void;

interface TodoListProps {
  messages: T;
  data: InfiniteData<Book[], unknown> | undefined;
  isFetching: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const TodoList = forwardRef<any, TodoListProps>(
  ({ data, isFetching, messages: t }, ref) => {
    const { mutate } = useUpdateBookMutation();

    return (
      <ScrollArea type="always" scrollbars="vertical">
        <section style={{ height: '500px' }}>
          <Stack px={'9'} gap={'4'}>
            {data?.pages.map((page) =>
              page?.map(({ title, id, author, isPurchased }, i) => (
                <BookCard
                  key={id}
                  ref={page.length === i + 1 ? ref : undefined}
                >
                  <BookCard.Info title={title} author={author} />
                  <Flex gap={'6'} align={'center'}>
                    <DeleteBookDialog
                      id={id}
                      author={author}
                      title={title}
                      isPurchased={isPurchased}
                    />
                    <Button
                      color="gray"
                      variant="soft"
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
          </Stack>
          <If condition={isFetching}>
            <Flex justify={'center'} py={'5'}>
              <Loading />
            </Flex>
          </If>
        </section>
      </ScrollArea>
    );
  }
);

TodoList.displayName = 'TodoList';
