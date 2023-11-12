import { QuickAccessTitle } from '@/ui/components/QuickAccess';
import { useTranslations } from 'next-intl';
import { QuickAccessInventoryList } from 'app/_components/QuickAccessList';
import { PreFetchBoundary } from '@/data-layer/hooks/PreFetchBoundary';
import { useQuickAccessPurchasedPrefetchQuery } from '@/data-layer/hooks';

export default function TodoPage() {
  const t = useTranslations('todo');
  const t2 = useTranslations('book.card');
  const messages = {
    actions: {
      done: t2('action.done'),
      return: t2('action.return'),
    },
    author: t2('author'),
    emptyList: t('quickAccess.emptyList'),
  };
  return (
    <>
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
    </>
  );
}
