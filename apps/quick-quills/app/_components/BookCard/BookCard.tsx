// import { Button } from '@/ui/components/Button';
import { Card } from '@/ui/components/Card';
// import { IconButton } from '@/ui/components/IconButton';
// import { TrashIcon } from '@/ui/icons';
// import { Flex } from '@radix-ui/themes';
// import { useTranslations } from 'next-intl';
// import type { BookInfoProps } from './BookInfo';
import { BookInfo } from './BookInfo';
import type { ReactNode } from 'react';

interface BookCardProps {
  children: ReactNode;
}

export const BookCard = ({ children }: BookCardProps) => {
  // const t = useTranslations('book.card');
  return <Card>{children}</Card>;
};

BookCard.Info = BookInfo;
// <BookInfo title={title} author={author} />
// <Flex gap={'6'} align={'center'}>
//   <IconButton variant="ghost" color="red">
//     <TrashIcon />
//   </IconButton>
//   <Button color="purple">{t('action')}</Button>
// </Flex>
