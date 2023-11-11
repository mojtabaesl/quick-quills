import type { Book } from '@/schema/book';
import { bookSchema } from '@/schema/book';

export type Pagination = {
  _order?: 'asc' | 'desc';
  _limit?: string;
  _sort?: keyof Book;
  _page?: string;
};

export interface UpdateBookProps {
  id: string;
  body: Partial<Book>;
}

export interface NewBookProps {
  body: Omit<Book, 'id'>;
}
export interface BooksFetcherProps {
  params?: Pagination & Partial<Record<keyof Book, string>>;
}

export const getBooks = async ({ params }: BooksFetcherProps = {}) => {
  const url = 'http://localhost:3333/api/books?' + new URLSearchParams(params);
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error('Network Error');
  }
  return bookSchema.array().parse(await res.json());
};

export const deleteBook = async ({ id }: { id: string }) => {
  const url = `http://localhost:3333/api/books/${id}`;
  const res = await fetch(url, { method: 'DELETE' });
  if (!res.ok) {
    throw new Error('Network error');
  }
  return await res.json();
};

export const updateBook = async ({ id, body }: UpdateBookProps) => {
  const url = `http://localhost:3333/api/books/${id}`;
  const res = await fetch(url, {
    method: 'PATCH',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (!res.ok) {
    throw new Error('Network error');
  }
  return await res.json();
};

export const addBook = async ({ body }: NewBookProps) => {
  const url = 'http://localhost:3333/api/books';
  const res = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (!res.ok) {
    throw new Error('Network error');
  }
  return await res.json();
};
