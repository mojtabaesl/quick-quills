import { Flex, Text } from '@radix-ui/themes';
import { Stack } from '../Stack';
import { SearchIcon } from '@/ui/icons';

export const NoResults = ({ message }: { message: string }) => {
  return (
    <Flex justify={'center'} align={'center'} grow={'1'}>
      <Stack gap={'2'} align={'center'} grow={'0'}>
        <SearchIcon size={32} />
        <Text size={'2'}>{message}</Text>
      </Stack>
    </Flex>
  );
};
