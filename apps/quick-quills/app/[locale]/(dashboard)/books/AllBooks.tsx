'use client';

import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import { SearchBox } from '@/ui/components/SearchBox';
import { BooksList } from 'app/_components/BooksList';
import { useDebounce } from '@uidotdev/usehooks';
import { NoResults } from '@/ui/components/NoResults';
import { Page } from '@/ui/components/Page';
import { Stack } from '@/ui/components/Stack';
import { useAllBooksInfiniteQuery } from '@/data-layer/hooks';

interface T {
  actions: Record<'done' | 'return', string>;
  search: string;
  author: string;
  noResults: string;
}

interface TodoListProps {
  messages: T;
}

export const AllBooks = ({ messages }: TodoListProps) => {
  const { ref, inView } = useInView();
  const [searchText, setSearchText] = useState('');
  const [isQueryEnabled, setIsQueryEnabled] = useState(true);
  const debouncedSearchTerm = useDebounce(searchText, 300);

  const { data, isError, fetchNextPage, hasNextPage, isFetching } =
    useAllBooksInfiniteQuery({
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
    <Stack gap={'5'} grow={'1'} pb={'7'}>
      <Page.Container direction={'row'} justify={'between'} align={'start'}>
        <SearchBox
          value={searchText}
          onChange={setSearchText}
          placeholder={messages.search}
        />
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
