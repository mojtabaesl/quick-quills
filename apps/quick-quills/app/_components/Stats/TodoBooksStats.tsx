'use client';

import { useAllBooksQuery } from '@/data-layer/hooks';
import { ValueDisplay } from '@/ui/components/ValueDisplay';
import { useMemo } from 'react';
import { Stack } from '@/ui/components/Stack';
import { Loading } from '@/ui/components/Loading';

export const TodoBooksStats = () => {
  const { data, isError, isLoading } = useAllBooksQuery();
  const count = useMemo(() => {
    return data?.filter((book) => !book.isPurchased).length;
  }, [data]);

  // this is the worst thing that i've done - I don't have a good api
  if (isError) return <>Error ...</>;
  if (isLoading)
    return (
      <Stack justify={'center'} align={'center'}>
        <Loading />
      </Stack>
    );

  return <ValueDisplay title="Books In Todo List" value={count?.toString()} />;
};
