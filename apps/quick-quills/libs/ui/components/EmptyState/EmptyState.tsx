import { PageLink } from '@/router/PageLink';
import { Button } from '../Button';
import { Stack } from '../Stack';
import { BookIllustration } from './BookIllustration';
import { Text } from '@radix-ui/themes';

// export const EmptyState = (props: EmptyStateProps) => {
export const EmptyState = () => {
  return (
    <Stack gap={'3'} align={'center'}>
      <BookIllustration />
      <Text>Your List Is Empty</Text>
      <PageLink href="/todo">
        <Button color="purple">Go To Todo List</Button>
      </PageLink>
    </Stack>
  );
};
