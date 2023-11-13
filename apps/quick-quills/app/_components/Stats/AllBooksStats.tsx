'use client';

import { useAllBooksQuery } from '@/data-layer/hooks';
import { Loading } from '@/ui/components/Loading';
import { Stack } from '@/ui/components/Stack';
import { ValueDisplay } from '@/ui/components/ValueDisplay';

export const AllBooksStats = () => {
  const { data, isError, isLoading } = useAllBooksQuery();
  if (isError) return <>Error ...</>;
  if (isLoading)
    return (
      <Stack justify={'center'} align={'center'}>
        <Loading />
      </Stack>
    );
  return <ValueDisplay title="All Books" value={data?.length.toString()} />;
};
