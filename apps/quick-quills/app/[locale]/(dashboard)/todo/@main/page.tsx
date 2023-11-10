import { useTranslations } from 'next-intl';
import { TodoList } from './List';
import { PreFetchBoundary } from '@/data-layer/PreFetchBoundary';
import { useTodoBooksPrefetchInfiniteQuery } from '@/data-layer/useTodoBooks';

export default function TodoPage() {
  const t = useTranslations('book.card.action');
  const messages = {
    actions: {
      done: t('done'),
      return: t('return'),
    },
  };
  return (
    <PreFetchBoundary
      preFetchedQueryClientFN={useTodoBooksPrefetchInfiniteQuery}
    >
      <TodoList messages={messages} />
    </PreFetchBoundary>
  );
}
