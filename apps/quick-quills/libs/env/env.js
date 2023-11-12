import { z } from 'zod';
import { fromZodError } from 'zod-validation-error';

export const publicENVSchema = z.object({
  NEXT_PUBLIC_API_URL: z.string().url(),
});

export const envSchema = z.object({
  NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
});

export const env = (function () {
  try {
    const publicENV = {
      // Public Side Envs
      NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    };

    const serverSideENV = {
      // Server Side Envs
    };

    const parsedPublicENV = publicENVSchema.parse(publicENV);
    const isCI = z.string().safeParse(process.env.CI);

    if (isCI.success && isCI.data === 'true') {
      console.warn('WARN: Type checking for server side envs is off');
      return { ...serverSideENV, ...parsedPublicENV };
    }
    const parsedServerSideENV = envSchema.parse(serverSideENV);
    return { ...parsedServerSideENV, ...parsedPublicENV };
  } catch (err) {
    const validationError = fromZodError(err);
    console.error(validationError);
    process.exit(-3);
  }
})();
