'use client';

import type { Book } from '@/schema/book';
import type {
  ForwardRefExoticComponent,
  HTMLAttributes,
  RefAttributes,
} from 'react';
import { useUpdateBookMutation } from '@/data-layer/hooks';
import { Button } from '@/ui/components/Button';
import { If } from '@/ui/components/If';
import { Flex } from '@radix-ui/themes';
import { BaseBookCard } from './BaseBookCard';
import { DeleteBookDialog } from 'app/_components/DeleteBook';
import { forwardRef } from 'react';
import { Done } from '@/ui/components/Done/Done';

interface T {
  actions: Record<'done' | 'return', string>;
  author: string;
}

export type InfiniteRef = (node?: Element | null | undefined) => void;

interface BookCardProps extends HTMLAttributes<HTMLDivElement> {
  messages: T;
  data: Book;
  minimal?: boolean;
}

interface OnClickHandlerProps {
  id: string;
  isPurchased: boolean;
}

type ForwardedRefBookCard = ForwardRefExoticComponent<
  BookCardProps & RefAttributes<HTMLDivElement>
>;

export const BookCard: ForwardedRefBookCard = forwardRef(
  ({ data, messages, minimal, ...rest }, ref) => {
    const { mutate } = useUpdateBookMutation();
    const { title, isPurchased, author, id } = data;

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
      <BaseBookCard ref={ref} {...rest}>
        <Flex align={'center'} gap={'4'}>
          <Done done={isPurchased} />
          <BaseBookCard.Info
            title={data.title}
            author={author}
            messages={{ author: messages.author }}
          />
        </Flex>
        <Flex gap={'6'} align={'center'}>
          <If condition={Boolean(!minimal)}>
            <DeleteBookDialog id={id} author={author} title={title} />
          </If>
          {isPurchased ? (
            <Button
              color="gray"
              variant="soft"
              onClick={() => onClickHandler({ id: id.toString(), isPurchased })}
            >
              {messages.actions.return}
            </Button>
          ) : (
            <Button
              color="gray"
              variant="soft"
              onClick={() => onClickHandler({ id: id.toString(), isPurchased })}
            >
              {messages.actions.done}
            </Button>
          )}
        </Flex>
      </BaseBookCard>
    );
  }
);

BookCard.displayName = 'BookCard';
