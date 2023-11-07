import { Button } from '@/ui/components/Button';
import { Card } from '@/ui/components/Card';
import { IconButton } from '@/ui/components/IconButton';
import { Stack } from '@/ui/components/Stack';
import { TrashIcon } from '@/ui/icons';
import { Flex, Text } from '@radix-ui/themes';
import { useTranslations } from 'next-intl';

interface BookCardProps {
  author: string;
  title: string;
}

export const BookCard = ({ title, author }: BookCardProps) => {
  const t = useTranslations('book.card');
  return (
    <Card>
      <Stack gap={'1'}>
        <Text as="p" size={'3'} weight={'bold'}>
          {title}
        </Text>
        <Flex gap={'2'} asChild>
          <Text as="p" size={'2'} color="gray">
            <span>{t('subtitle')}</span>
            <span>{author}</span>
          </Text>
        </Flex>
      </Stack>
      <Flex gap={'6'} align={'center'}>
        <IconButton variant="ghost" color="red">
          <TrashIcon />
        </IconButton>
        <Button color="purple">{t('action')}</Button>
      </Flex>
    </Card>
  );
};
