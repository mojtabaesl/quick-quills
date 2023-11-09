import { QuickAccessTitle } from '@/ui/components/QuickAccessTitle';
import { useTranslations } from 'next-intl';
import { SearchBox } from '@/ui/components/SearchBox';
import { Page } from '@/ui/components/Page';
import { InventoryList } from './List';
import { PreFetchBoundary } from '@/data-layer/PreFetchBoundary';
import { usePurchasedBooksPrefetchInfiniteQuery } from '@/data-layer/usePurchasedBooks';
import { QuickAccessTodoList } from 'app/_shared/QuickAccessList';
import { useQuickAccessTodoPrefetchQuery } from '@/data-layer/useQuickAccess';

export default function TodoPage() {
  const t = useTranslations('inventory');
  const t2 = useTranslations('book.card.action');
  const messages = {
    actions: {
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
          preFetchedQueryClientFN={usePurchasedBooksPrefetchInfiniteQuery}
        >
          <InventoryList messages={messages} />
        </PreFetchBoundary>
      </Page.Main>
      <Page.QuickAccess>
        <QuickAccessTitle
          title={t('quickAccess.title')}
          seeMoreTitle={t('quickAccess.seeMore')}
          seeMoreLink="/todo"
        />
        <PreFetchBoundary
          preFetchedQueryClientFN={useQuickAccessTodoPrefetchQuery}
        >
          <QuickAccessTodoList messages={messages} />
        </PreFetchBoundary>
      </Page.QuickAccess>
    </Page>
  );
}
