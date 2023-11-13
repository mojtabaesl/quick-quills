import { Stack } from '../Stack';
import { Text } from '@radix-ui/themes';

interface ValueDisplayProps {
  title: string;
  value?: string;
}

export const ValueDisplay = ({ title, value }: ValueDisplayProps) => {
  return (
    <Stack align={'center'}>
      <Text as={'p'} style={{ fontSize: '64px' }} weight={'bold'}>
        {value ?? '0'}
      </Text>
      <Text color="gray">{title}</Text>
    </Stack>
  );
};
