'use client';

import { Button } from '@/ui/components/Button';
import { InputField } from '@/ui/components/InputField';
import { Dialog, Flex } from '@radix-ui/themes';
import { zodResolver } from '@hookform/resolvers/zod';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Stack } from '@/ui/components/Stack';
import { useAddBookMutation } from '@/data-layer/hooks';
import { Loading } from '@/ui/components/Loading';
import { useEffect } from 'react';

const newBookSchema = z.object({
  title: z
    .string()
    .trim()
    .min(3, { message: 'Title must contain at least 3 characters' }),
  author: z.string().trim(),
});

export interface NewBookDialogMessages {
  title: string;
  fields: Record<'title' | 'author', string>;
  actions: Record<'addBook' | 'cancel', string>;
}

type NewBookFormInput = z.infer<typeof newBookSchema>;

interface NewBookFormProps {
  onClose: () => void;
  messages: NewBookDialogMessages;
}

export const NewBookDialog = ({ onClose, messages }: NewBookFormProps) => {
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
          <Dialog.Title>{messages.title}</Dialog.Title>
          <Stack gap={'4'} asChild>
            <form onSubmit={handleSubmit(onSubmit)}>
              <InputField
                label="Title"
                id="title"
                withAsterisk
                placeholder={messages.fields.title}
                error={errors.title?.message}
                {...register('title')}
              />
              <InputField
                id="author"
                label="Author"
                placeholder={messages.fields.author}
                error={errors.author?.message}
                {...register('author')}
              />
              <Flex gap="3" mt="4" justify="end">
                <Dialog.Close>
                  <Button variant="soft" color="gray">
                    {messages.actions.cancel}
                  </Button>
                </Dialog.Close>
                <Button
                  disabled={!isValid || !isDirty}
                  type="submit"
                  color="purple"
                >
                  {isPending ? <Loading /> : messages.actions.addBook}
                </Button>
              </Flex>
            </form>
          </Stack>
        </Stack>
      </Dialog.Content>
    </Dialog.Root>
  );
};
