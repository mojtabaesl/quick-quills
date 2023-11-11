'use client';

import { Button } from '@/ui/components/Button';
import { useState } from 'react';
import { NewBookDialog } from './NewBookDialog';

export const AddBook = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  return (
    <>
      <Button size={'3'} color="purple" onClick={() => setIsDialogOpen(true)}>
        Add New Book
      </Button>
      {isDialogOpen ? (
        <NewBookDialog onClose={() => setIsDialogOpen(false)} />
      ) : null}
    </>
  );
};
