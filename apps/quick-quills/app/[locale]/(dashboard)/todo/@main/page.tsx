import { PreFetchBoundary } from '@/data-layer/PreFetchBoundary';
import { useTodoBooksPrefetchInfiniteQuery } from '@/data-layer/useTodoBooks';
import { TodoBooks } from './TodoBooks';
import { useTranslations } from 'next-intl';

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
      preFetchedQueryClientFN={useTodoBooksPrefetchInfiniteQuery}
    >
      <TodoBooks messages={messages} />
    </PreFetchBoundary>
  );
}
