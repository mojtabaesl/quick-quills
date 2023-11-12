'use client';

import type { NewBookDialogMessages } from './NewBookDialog';
import { Button } from '@/ui/components/Button';
import { useState } from 'react';
import { NewBookDialog } from './NewBookDialog';
import { If } from '@/ui/components/If';

interface AddBookProps {
  label: string;
  messages: NewBookDialogMessages;
}

export const AddBook = ({ label, messages }: AddBookProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  return (
    <>
      <Button size={'3'} color="purple" onClick={() => setIsDialogOpen(true)}>
        {label}
      </Button>
      <If condition={isDialogOpen}>
        <NewBookDialog
          onClose={() => setIsDialogOpen(false)}
          messages={messages}
        />
      </If>
    </>
  );
};
