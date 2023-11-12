import { debug } from '@/debug';
import type { ZodError } from 'zod';
import { z } from 'zod';
import { fromZodError } from 'zod-validation-error';

export const publicENVSchema = z.object({
  NEXT_PUBLIC_API_URL: z.string().url(),
});

export const env = (function () {
  try {
    const publicENV = {
      // Public Side Envs
      NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    };

    const parsedPublicENV = publicENVSchema.parse(publicENV);

    return { ...parsedPublicENV };
  } catch (err) {
    const validationError = fromZodError(err as ZodError);
    debug.error('All', validationError);
    process.exit(-3);
  }
})();
