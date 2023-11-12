import type {
  ForwardRefExoticComponent,
  HTMLAttributes,
  RefAttributes,
  ReactNode,
  PropsWithoutRef,
} from 'react';
import { forwardRef } from 'react';
import { Card } from '@/ui/components/Card';
import { BaseBookInfo } from './BaseBookInfo';

interface BookCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

type FR<T, R> = ForwardRefExoticComponent<
  PropsWithoutRef<R> & RefAttributes<T>
>;

type BookCardWithRef = FR<HTMLDivElement, BookCardProps> & {
  Info: typeof BaseBookInfo;
};

export const BaseBookCard = forwardRef(
  ({ children, style, ...rest }: BookCardProps, ref) => {
    return (
      <Card
        align={'center'}
        ref={ref}
        style={{ minHeight: '66px', ...style }}
        {...rest}
      >
        {children}
      </Card>
    );
  }
) as BookCardWithRef;

BaseBookCard.displayName = 'BaseBookCard';
BaseBookCard.Info = BaseBookInfo;
