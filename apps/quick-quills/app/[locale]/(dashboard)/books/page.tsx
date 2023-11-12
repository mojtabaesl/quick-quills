import { useTranslations } from 'next-intl';
import { Page } from '@/ui/components/Page';
import { PreFetchBoundary } from '@/data-layer/PreFetchBoundary';
import { useAllBooksPrefetchInfiniteQuery } from '@/data-layer/useAllBooks';
import { AllBooks } from './AllBooks';

export default function BooksPage() {
  const t2 = useTranslations('book.card.action');
  const messages = {
    actions: {
      done: t2('done'),
      return: t2('return'),
    },
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
