import { useTranslations } from 'next-intl';
import { SearchBox } from '@/ui/components/SearchBox';
import { Page } from '@/ui/components/Page';
import { BooksList } from './List';
import { PreFetchBoundary } from '@/data-layer/PreFetchBoundary';
import { useAllBooksPrefetchQuery } from '@/data-layer/useAllBooks';

export default function BooksPage() {
  const t = useTranslations('inventory');
  const t2 = useTranslations('book.card.action');
  const messages = {
    actions: {
      done: t2('done'),
      return: t2('return'),
    },
  };
  return (
    <Page>
      <Page.Header>
        <SearchBox placeholder={t('search')} />
      </Page.Header>
      <Page.Main>
        <PreFetchBoundary preFetchedQueryClientFN={useAllBooksPrefetchQuery}>
          <BooksList messages={messages} />
        </PreFetchBoundary>
      </Page.Main>
    </Page>
  );
}
