'use client';

import { useUpdateBookMutation } from '@/data-layer/useUpdateBook';
import type { Book } from '@/schema/book';
import { Button } from '@/ui/components/Button';
import { If } from '@/ui/components/If';
import { Loading } from '@/ui/components/Loading';
import { Stack } from '@/ui/components/Stack';
import { Flex, ScrollArea } from '@radix-ui/themes';
import type { InfiniteData } from '@tanstack/react-query';
import { BookCard } from 'app/_components/BookCard';
import { DeleteBookDialog } from 'app/_components/DeleteBook';
import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import { forwardRef } from 'react';

interface T {
  actions: Record<'done' | 'return', string>;
}

export type InfiniteRef = (node?: Element | null | undefined) => void;

interface BooksListProps {
  messages: T;
  data: InfiniteData<Book[], unknown> | undefined;
  isFetching: boolean;
}

interface OnClickHandlerProps {
  id: string;
  isPurchased: boolean;
}

type ForwardedRefBooksList = ForwardRefExoticComponent<
  BooksListProps & RefAttributes<HTMLDivElement>
>;

export const BooksList: ForwardedRefBooksList = forwardRef(
  ({ data, isFetching, messages: t }, ref) => {
    const { mutate } = useUpdateBookMutation();

    const onClickHandler = ({ id, isPurchased }: OnClickHandlerProps) => {
      mutate({
        id,
        body: {
          isPurchased: !isPurchased,
          purchasedDate: isPurchased ? null : new Date().toISOString(),
        },
      });
    };

    return (
      <ScrollArea type="always" scrollbars="vertical">
        <section style={{ height: '500px' }}>
          <Stack px={'9'} gap={'4'}>
            {data?.pages.map((page) =>
              page?.map(({ isPurchased, title, id, author }, i) => (
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
                    {isPurchased ? (
                      <Button
                        color="gray"
                        variant="soft"
                        onClick={() =>
                          onClickHandler({ id: id.toString(), isPurchased })
                        }
                      >
                        {t.actions.return}
                      </Button>
                    ) : (
                      <Button
                        color="gray"
                        variant="soft"
                        onClick={() =>
                          onClickHandler({ id: id.toString(), isPurchased })
                        }
                      >
                        {t.actions.done}
                      </Button>
                    )}
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

BooksList.displayName = 'BooksList';
