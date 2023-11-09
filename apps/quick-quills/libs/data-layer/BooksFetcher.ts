import type { Book } from '@/schema/book';
import { bookSchema } from '@/schema/book';

export type Pagination = {
  _order?: 'asc' | 'desc';
  _limit?: string;
  _sort?: keyof Book;
  _page?: string;
};

export interface BooksFetcherProps {
  params?: Pagination & Partial<Record<keyof Book, string>>;
}

export const booksFetcher = async ({ params }: BooksFetcherProps = {}) => {
  const url = 'http://localhost:3333/api/books?' + new URLSearchParams(params);
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error('Network Error');
  }
  return bookSchema.array().parse(await res.json());
};
