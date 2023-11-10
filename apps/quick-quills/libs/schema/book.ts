import { z } from 'zod';

export const bookSchema = z.object({
  id: z.number(),
  title: z.string(),
  author: z.string(),
  isPurchased: z.boolean(),
  purchasedDate: z.string().nullable(),
});

export type Book = z.infer<typeof bookSchema>;
