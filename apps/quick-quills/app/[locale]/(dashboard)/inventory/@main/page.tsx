import { useTranslations } from 'next-intl';
import { InventoryList } from './List';
import { PreFetchBoundary } from '@/data-layer/PreFetchBoundary';
import { usePurchasedBooksPrefetchInfiniteQuery } from '@/data-layer/usePurchasedBooks';

export default function TodoPage() {
  const t = useTranslations('book.card.action');
  const messages = {
    actions: {
      return: t('return'),
    },
  };
  return (
    <PreFetchBoundary
      preFetchedQueryClientFN={usePurchasedBooksPrefetchInfiniteQuery}
    >
      <InventoryList messages={messages} />
    </PreFetchBoundary>
  );
}
