'use client';

import { ErrorHandler, type ErrorHandlerProps } from '@/ui/components/Error';

export default function Error({ error, reset }: ErrorHandlerProps) {
  return <ErrorHandler error={error} reset={reset} />;
}
