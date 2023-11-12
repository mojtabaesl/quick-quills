'use client';

import type { Book } from '@/schema/book';
import { If } from '@/ui/components/If';
import { Loading } from '@/ui/components/Loading';
import { Stack } from '@/ui/components/Stack';
import { Flex, ScrollArea } from '@radix-ui/themes';
import type { InfiniteData } from '@tanstack/react-query';
import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import { forwardRef } from 'react';
import { BookCard } from '../BookCard';

interface T {
  actions: Record<'done' | 'return', string>;
  author: string;
}

export type InfiniteRef = (node?: Element | null | undefined) => void;

interface BooksListProps {
  messages: T;
  data: InfiniteData<Book[], unknown> | undefined;
  isFetching: boolean;
}

type ForwardedRefBooksList = ForwardRefExoticComponent<
  BooksListProps & RefAttributes<HTMLDivElement>
>;

export const BooksList: ForwardedRefBooksList = forwardRef(
  ({ data, isFetching, messages }, ref) => {
    return (
      <ScrollArea type="always" scrollbars="vertical">
        <section style={{ height: '500px' }}>
          <Stack px={'9'} gap={'4'}>
            {data?.pages.map((page) =>
              page?.map(({ id, ...rest }, i) => (
                <BookCard
                  key={id}
                  ref={page.length === i + 1 ? ref : undefined}
                  data={{ id, ...rest }}
                  messages={messages}
                />
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

BooksList.displayName = 'BooksList';
