import { forwardRef, type ReactNode } from 'react';
import { Card } from '@/ui/components/Card';
import { BookInfo } from './BookInfo';

interface BookCardProps {
  children: ReactNode;
}

type FR<T, R> = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<R> & React.RefAttributes<T>
>;

type BookCardWithRef = FR<HTMLDivElement, BookCardProps> & {
  Info: typeof BookInfo;
};

export const BookCard = forwardRef(({ children }: BookCardProps, ref) => {
  return (
    <Card align={'center'} ref={ref}>
      {children}
    </Card>
  );
}) as BookCardWithRef;

BookCard.displayName = 'BookCard';
BookCard.Info = BookInfo;
