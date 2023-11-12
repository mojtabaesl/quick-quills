import { QuickAccessTitle } from '@/ui/components/QuickAccess';
import { useTranslations } from 'next-intl';
import { PreFetchBoundary } from '@/data-layer/hooks/PreFetchBoundary';
import { useQuickAccessTodoPrefetchQuery } from '@/data-layer/hooks';
import { QuickAccessTodoList } from 'app/_components/QuickAccessList';

export default function TodoPage() {
  const t = useTranslations('inventory');
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
        seeMoreLink="/todo"
      />
      <PreFetchBoundary
        preFetchedQueryClientFN={useQuickAccessTodoPrefetchQuery}
      >
        <QuickAccessTodoList messages={messages} />
      </PreFetchBoundary>
    </>
  );
}
