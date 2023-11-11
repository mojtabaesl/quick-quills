import { useTranslations } from 'next-intl';
import { TodoList } from './List';
import { PreFetchBoundary } from '@/data-layer/PreFetchBoundary';
import { useTodoBooksPrefetchInfiniteQuery } from '@/data-layer/useTodoBooks';
import { Page } from '@/ui/components/Page';
import { SearchBox } from '@/ui/components/SearchBox';
import { Flex } from '@radix-ui/themes';
import { AddBook } from 'app/_components/AddBook';

export default function TodoPage() {
  const t = useTranslations('book.card.action');
  const messages = {
    actions: {
      done: t('done'),
      return: t('return'),
    },
  };
  return (
    <>
      <Page.Header>
        <Flex gap={'4'} grow={'1'} justify={'between'}>
          <SearchBox />
          <AddBook />
        </Flex>
      </Page.Header>
      <Page.Main>
        <PreFetchBoundary
          preFetchedQueryClientFN={useTodoBooksPrefetchInfiniteQuery}
        >
          <TodoList messages={messages} />
        </PreFetchBoundary>
      </Page.Main>
    </>
  );
}
