'use client';

import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import { useTodoBooksInfiniteQuery } from '@/data-layer/hooks';
import { SearchBox } from '@/ui/components/SearchBox';
import { useDebounce } from '@uidotdev/usehooks';
import { NoResults } from '@/ui/components/NoResults';
import { AddBook } from 'app/_components/AddBook';
import { Page } from '@/ui/components/Page';
import { Stack } from '@/ui/components/Stack';
import { BooksList } from 'app/_components/BooksList';

interface T {
  title: string;
  actions: Record<'done' | 'return' | 'addBook' | 'cancel', string>;
  search: string;
  add: string;
  author: string;
  noResults: string;
  fields: Record<'title' | 'author', string>;
}

interface TodoListProps {
  messages: T;
}

export const TodoBooks = ({ messages }: TodoListProps) => {
  const { ref, inView } = useInView();
  const [searchText, setSearchText] = useState('');
  const [isQueryEnabled, setIsQueryEnabled] = useState(true);
  const debouncedSearchTerm = useDebounce(searchText, 300);

  const { data, isError, fetchNextPage, hasNextPage, isFetching } =
    useTodoBooksInfiniteQuery({
      query: debouncedSearchTerm,
      enabled: isQueryEnabled,
    });

  useEffect(() => {
    if (debouncedSearchTerm) {
      setIsQueryEnabled(true);
    }
  }, [debouncedSearchTerm, setIsQueryEnabled]);

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage]);

  if (isError) return <>Error ...</>;

  return (
    <Stack gap={'5'} grow={'1'}>
      <Page.Container direction={'row'} justify={'between'} align={'start'}>
        <SearchBox
          value={searchText}
          onChange={setSearchText}
          placeholder={messages.search}
        />
        <AddBook label={messages.add} messages={messages} />
      </Page.Container>
      {data?.pages[0].length !== 0 ? (
        <BooksList
          ref={ref}
          data={data}
          isFetching={isFetching}
          messages={messages}
        />
      ) : (
        <NoResults message={messages.noResults} />
      )}
    </Stack>
  );
};
