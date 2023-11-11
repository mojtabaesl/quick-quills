'use client';

import { Button } from '@/ui/components/Button';
import { InputField } from '@/ui/components/InputField';
import { Dialog, Flex } from '@radix-ui/themes';
import { zodResolver } from '@hookform/resolvers/zod';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Stack } from '@/ui/components/Stack';
import { useAddBookMutation } from '@/data-layer/useAddBook';
import { Loading } from '@/ui/components/Loading';
import { useEffect } from 'react';

const newBookSchema = z.object({
  title: z
    .string()
    .trim()
    .min(3, { message: 'Title must contain at least 3 characters' }),
  author: z.string().trim(),
});

type NewBookFormInput = z.infer<typeof newBookSchema>;

interface NewBookFormProps {
  onClose: () => void;
}

export const NewBookDialog = ({ onClose }: NewBookFormProps) => {
  const { isPending, isSuccess, mutate } = useAddBookMutation();

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm<NewBookFormInput>({
    resolver: zodResolver(newBookSchema),
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<NewBookFormInput> = async ({
    title,
    author,
  }) => {
    mutate({ body: { author, title } });
  };

  useEffect(() => {
    if (isSuccess) onClose();
  }, [isSuccess, onClose]);

  return (
    <Dialog.Root defaultOpen={true} onOpenChange={onClose}>
      <Dialog.Content style={{ maxWidth: 450 }}>
        <Stack gap={'6'}>
          <Dialog.Title>Add New Book To Todo List</Dialog.Title>
          <Stack gap={'4'} asChild>
            <form onSubmit={handleSubmit(onSubmit)}>
              <InputField
                label="Title"
                id="title"
                withAsterisk
                placeholder="Book Author"
                error={errors.title?.message}
                {...register('title')}
              />
              <InputField
                id="author"
                label="Author"
                placeholder="Book Author"
                error={errors.author?.message}
                {...register('author')}
              />
              <Flex gap="3" mt="4" justify="end">
                <Dialog.Close>
                  <Button variant="soft" color="gray">
                    Cancel
                  </Button>
                </Dialog.Close>
                <Button
                  disabled={!isValid || !isDirty}
                  type="submit"
                  color="purple"
                >
                  {isPending ? <Loading /> : 'Add New Book'}
                </Button>
              </Flex>
            </form>
          </Stack>
        </Stack>
      </Dialog.Content>
    </Dialog.Root>
  );
};
