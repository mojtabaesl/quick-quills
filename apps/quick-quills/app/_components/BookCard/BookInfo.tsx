import { If } from '@/ui/components/If';
import { Stack } from '@/ui/components/Stack';
import { Flex, Text } from '@radix-ui/themes';

export interface BookInfoProps {
  author: string;
  title: string;
}

export const BookInfo = ({ title, author }: BookInfoProps) => {
  return (
    <Stack gap={'1'} justify={'center'}>
      <Text as="p" size={'3'} weight={'bold'}>
        {title}
      </Text>
      <If condition={Boolean(author)}>
        <Flex gap={'2'} asChild>
          <Text as="p" size={'2'} color="gray">
            <span>Author:</span>
            <span>{author}</span>
          </Text>
        </Flex>
      </If>
    </Stack>
  );
};
