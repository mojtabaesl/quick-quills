'use client';

import type { ErrorHandlerProps } from '@/ui/components/Error';
import { ErrorHandler } from '@/ui/components/Error';

export default function GlobalError({ error, reset }: ErrorHandlerProps) {
  return (
    <html>
      <body>
        <ErrorHandler error={error} reset={reset} />
      </body>
    </html>
  );
}
