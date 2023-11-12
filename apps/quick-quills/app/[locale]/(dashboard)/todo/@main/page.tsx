import { PreFetchBoundary } from '@/data-layer/hooks/PreFetchBoundary';
import { useTodoBooksPrefetchInfiniteQuery } from '@/data-layer/hooks';
import { TodoBooks } from './TodoBooks';
import { useTranslations } from 'next-intl';

export default function TodoPage() {
  const t = useTranslations('book.card');
  const t2 = useTranslations('todo');
  const messages = {
    actions: {
      return: t('action.return'),
      done: t('action.done'),
      cancel: t2('actions.cancel'),
      addBook: t2('actions.addBook'),
    },
    search: t2('search'),
    add: t2('actions.addBook'),
    author: t('author'),
    noResults: t2('noResults'),
    title: t2('form.title'),
    fields: {
      title: t2('form.fields.title'),
      author: t2('form.fields.author'),
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
