import { useTranslations } from 'next-intl';
import { Page } from '@/ui/components/Page';
import { PreFetchBoundary } from '@/data-layer/hooks/PreFetchBoundary';
import { useAllBooksPrefetchInfiniteQuery } from '@/data-layer/hooks';
import { AllBooks } from './AllBooks';

export default function BooksPage() {
  const t = useTranslations('book.card');
  const t2 = useTranslations('allBooks');
  const messages = {
    actions: {
      done: t('action.done'),
      return: t('action.return'),
    },
    search: t2('search'),
    author: t('author'),
    noResults: t2('noResults'),
  };

  return (
    <Page>
      <Page.Main>
        <PreFetchBoundary
          preFetchedQueryClientFN={useAllBooksPrefetchInfiniteQuery}
        >
          <AllBooks messages={messages} />
        </PreFetchBoundary>
      </Page.Main>
    </Page>
  );
}
