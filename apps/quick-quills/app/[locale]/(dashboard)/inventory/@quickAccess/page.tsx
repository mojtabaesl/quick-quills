import { QuickAccessTitle } from '@/ui/components/QuickAccessTitle';
import { useTranslations } from 'next-intl';
import { PreFetchBoundary } from '@/data-layer/PreFetchBoundary';
import { useQuickAccessTodoPrefetchQuery } from '@/data-layer/useQuickAccess';
import { QuickAccessTodoList } from 'app/_components/QuickAccessList';

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
