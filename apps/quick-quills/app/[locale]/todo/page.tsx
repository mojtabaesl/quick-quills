import { QuickAccessTitle } from '@/ui/components/QuickAccessTitle';
import { useTranslations } from 'next-intl';
import { SearchBox } from '@/ui/components/SearchBox';
import { Page } from '@/ui/components/Page';
import { TodoList } from './List';
import { QuickAccessInventoryList } from 'app/_shared/QuickAccessList';
import { PreFetchBoundary } from '@/data-layer/PreFetchBoundary';
import { useTodoBooksPrefetchInfiniteQuery } from '@/data-layer/useTodoBooks';
import { useQuickAccessPurchasedPrefetchQuery } from '@/data-layer/useQuickAccess';

export default function TodoPage() {
  const t = useTranslations('todo');
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
        <PreFetchBoundary
          preFetchedQueryClientFN={useTodoBooksPrefetchInfiniteQuery}
        >
          <TodoList messages={messages} />
        </PreFetchBoundary>
      </Page.Main>
      <Page.QuickAccess>
        <QuickAccessTitle
          title={t('quickAccess.title')}
          seeMoreTitle={t('quickAccess.seeMore')}
          seeMoreLink="/inventory"
        />
        <PreFetchBoundary
          preFetchedQueryClientFN={useQuickAccessPurchasedPrefetchQuery}
        >
          <QuickAccessInventoryList messages={messages} />
        </PreFetchBoundary>
      </Page.QuickAccess>
    </Page>
  );
}
