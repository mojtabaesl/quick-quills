import { debug } from '@/debug';
import { env } from '@/env';
import type { Book } from '@/schema/book';
import { bookSchema } from '@/schema/book';

export type Pagination = {
  _order?: 'asc' | 'desc';
  _limit?: string;
  _sort?: keyof Book;
  _page?: string;
  q?: string;
};

export interface UpdateBookProps {
  id: string;
  body: Partial<Book>;
}

export interface NewBookProps {
  body: Omit<Book, 'id'>;
}
export interface GetAllBooksProps {
  params?: Pagination & Partial<Record<keyof Book, string>>;
}

export class BookService {
  constructor(private apiUrl: string, private schema: typeof bookSchema) {
    this.apiUrl = apiUrl + '/books';
    this.schema = schema;
  }

  private async validate(value: unknown) {
    return this.schema.parse(value);
  }

  private async validateArray(value: unknown) {
    return this.schema.array().parse(value);
  }

  private async handleFetch(url: string, options?: RequestInit) {
    const res = await fetch(url, options);
    if (!res.ok) {
      throw new Error('Network Error');
    }
    return await res.json();
  }

  async getAll({ params }: GetAllBooksProps = {}) {
    const url = `${this.apiUrl}?` + new URLSearchParams(params);
    debug.log('Service', { url });
    const res = await this.handleFetch(url);
    return this.validateArray(res);
  }

  async delete({ id }: { id: string }) {
    const url = `${this.apiUrl}/${id}`;
    return await this.handleFetch(url, { method: 'DELETE' });
  }

  async update({ id, body }: UpdateBookProps) {
    const url = `${this.apiUrl}/${id}`;
    const res = await this.handleFetch(url, {
      method: 'PATCH',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return this.validate(res);
  }

  async add({ body }: NewBookProps) {
    const url = this.apiUrl;
    const res = await this.handleFetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return this.validate(res);
  }
}

const bookService = new BookService(env.NEXT_PUBLIC_API_URL, bookSchema);
export { bookService };
