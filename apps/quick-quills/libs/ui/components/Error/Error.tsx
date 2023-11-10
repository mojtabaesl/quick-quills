'use client';

import { Button } from '@/ui/components/Button';
import { Stack } from '@/ui/components/Stack';
import { AlertTriangleIcon } from '@/ui/icons';
import { Card, Text } from '@radix-ui/themes';
import { useEffect } from 'react';

export interface ErrorHandlerProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export function ErrorHandler({ error, reset }: ErrorHandlerProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Card style={{ padding: '20px', height: 'max-content' }}>
      <Stack gap={'4'} align={'center'}>
        <Stack gap={'2'} align={'center'}>
          <AlertTriangleIcon size={40} strokeWidth={1} />
          <Text size={'4'}>Something went wrong!</Text>
        </Stack>
        <Button color="purple" onClick={() => reset()}>
          Try again
        </Button>
      </Stack>
    </Card>
  );
}
