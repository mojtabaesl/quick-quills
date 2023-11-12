'use client';

import { useDeleteBook } from '@/data-layer/hooks';
import type { Book } from '@/schema/book';
import { Button } from '@/ui/components/Button';
import { IconButton } from '@/ui/components/IconButton';
import { Stack } from '@/ui/components/Stack';
import { TrashIcon } from '@/ui/icons';
import { Text, Dialog, Flex } from '@radix-ui/themes';

type DeleteDialogProps = Pick<Book, 'author' | 'id' | 'title' | 'isPurchased'>;

export const DeleteBookDialog = ({
  id,
  author,
  title,
  isPurchased,
}: DeleteDialogProps) => {
  const { mutate } = useDeleteBook({
    id: id.toString(),
    invalidateQueries: isPurchased ? 'purchased' : 'todo',
  });

  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <IconButton variant="ghost" color="red">
          <TrashIcon />
        </IconButton>
      </Dialog.Trigger>

      <Dialog.Content style={{ maxWidth: 450 }}>
        <Dialog.Title>Delete Book</Dialog.Title>
        <Stack gap={'1'} my="5">
          <Text size={'2'}>
            {`Are you sure you want to delete the book "${title}"`}
            {author ? ` from "${author}"` : ''}
          </Text>
          <Text size={'2'} color="red">
            This action cannot be undone.
          </Text>
        </Stack>
        <Flex gap="3" mt="4" justify="end">
          <Dialog.Close>
            <Button variant="soft" color="gray">
              Cancel
            </Button>
          </Dialog.Close>
          <Button color="red" onClick={() => mutate()}>
            Delete
          </Button>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
};
