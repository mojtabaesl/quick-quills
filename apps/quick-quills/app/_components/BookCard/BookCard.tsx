import { Card } from '@/ui/components/Card';
import { BookInfo } from './BookInfo';
import type { ReactNode } from 'react';

interface BookCardProps {
  children: ReactNode;
}

export const BookCard = ({ children }: BookCardProps) => {
  return <Card align={'center'}>{children}</Card>;
};

BookCard.Info = BookInfo;
