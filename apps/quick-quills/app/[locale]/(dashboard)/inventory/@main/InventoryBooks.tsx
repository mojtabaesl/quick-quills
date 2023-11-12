'use client';

import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import { SearchBox } from '@/ui/components/SearchBox';
import { useDebounce } from '@uidotdev/usehooks';
import { NoResults } from '@/ui/components/NoResults';
import { Stack } from '@/ui/components/Stack';
import { usePurchasedBooksInfiniteQuery } from '@/data-layer/hooks';
import { Page } from '@/ui/components/Page';
import { BooksList } from 'app/_components/BooksList';

interface T {
  actions: Record<'return' | 'done', string>;
  search: string;
  author: string;
  noResults: string;
}

interface TodoListProps {
  messages: T;
}

export const InventoryBooks = ({ messages }: TodoListProps) => {
  const { ref, inView } = useInView();
  const [searchText, setSearchText] = useState('');
  const [isQueryEnabled, setIsQueryEnabled] = useState(true);
  const debouncedSearchTerm = useDebounce(searchText, 300);

  const { data, isError, fetchNextPage, hasNextPage, isFetching } =
    usePurchasedBooksInfiniteQuery({
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
