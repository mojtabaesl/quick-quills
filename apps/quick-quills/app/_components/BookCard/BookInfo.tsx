import { Stack } from '@/ui/components/Stack';
import { Flex, Text } from '@radix-ui/themes';
import { useTranslations } from 'next-intl';

export interface BookInfoProps {
  author: string;
  title: string;
}

export const BookInfo = ({ title, author }: BookInfoProps) => {
  const t = useTranslations('book.card');

  return (
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
  );
};
