import { useTranslations } from 'next-intl';
import { PreFetchBoundary } from '@/data-layer/hooks/PreFetchBoundary';
import { usePurchasedBooksPrefetchInfiniteQuery } from '@/data-layer/hooks';
import { InventoryBooks } from './InventoryBooks';

export default function TodoPage() {
  const t = useTranslations('book.card');
  const t2 = useTranslations('inventory');
  const messages = {
    actions: {
      return: t('action.return'),
      done: t('action.done'),
    },
    search: t2('search'),
    author: t('author'),

    noResults: t2('noResults'),
  };
  return (
    <PreFetchBoundary
      preFetchedQueryClientFN={usePurchasedBooksPrefetchInfiniteQuery}
    >
      <InventoryBooks messages={messages} />
    </PreFetchBoundary>
  );
}
