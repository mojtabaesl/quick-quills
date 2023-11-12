import { useTranslations } from 'next-intl';
import { PreFetchBoundary } from '@/data-layer/PreFetchBoundary';
import { usePurchasedBooksPrefetchInfiniteQuery } from '@/data-layer/usePurchasedBooks';
import { InventoryBooks } from './InventoryBooks';

export default function TodoPage() {
  const t = useTranslations('book.card.action');
  const messages = {
    actions: {
      return: t('return'),
      done: t('done'),
    },
  };
  return (
    <PreFetchBoundary
      preFetchedQueryClientFN={usePurchasedBooksPrefetchInfiniteQuery}
    >
      <InventoryBooks messages={messages} />
    </PreFetchBoundary>
  );
}
