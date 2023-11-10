import { QuickAccessTitle } from '@/ui/components/QuickAccessTitle';
import { useTranslations } from 'next-intl';
import { QuickAccessInventoryList } from 'app/_components/QuickAccessList';
import { PreFetchBoundary } from '@/data-layer/PreFetchBoundary';
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
