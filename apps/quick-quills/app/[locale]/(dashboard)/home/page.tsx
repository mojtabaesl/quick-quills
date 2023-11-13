import {
  PreFetchBoundary,
  useQuickAccessPurchasedPrefetchQuery,
  useQuickAccessTodoPrefetchQuery,
} from '@/data-layer/hooks';
import { Page } from '@/ui/components/Page';
import { QuickAccessTitle } from '@/ui/components/QuickAccess';
import { Stack } from '@/ui/components/Stack';
import { Flex } from '@radix-ui/themes';
import {
  QuickAccessInventoryList,
  QuickAccessTodoList,
} from 'app/_components/QuickAccessList';
import {
  AllBooksStats,
  PurchasedBooksStats,
  TodoBooksStats,
} from 'app/_components/Stats';
import { useTranslations } from 'next-intl';

export default function Index() {
  const t = useTranslations('inventory');
  const t2 = useTranslations('book.card');
  const t3 = useTranslations('todo');
  const t4 = useTranslations('book.card');
  const messages1 = {
    actions: {
      done: t2('action.done'),
      return: t2('action.return'),
    },
    author: t2('author'),
    emptyList: t('quickAccess.emptyList'),
  };
  const messages = {
    actions: {
      done: t4('action.done'),
      return: t4('action.return'),
    },
    author: t4('author'),
    emptyList: t3('quickAccess.emptyList'),
  };
  return (
    <Stack grow={'1'} gap={'9'} pt={'5'}>
      <Page.QuickAccess style={{ border: 'none' }}>
        <QuickAccessTitle title={'Overall'} />
        <Flex gap={'9'}>
          <AllBooksStats />
          <PurchasedBooksStats />
          <TodoBooksStats />
        </Flex>
      </Page.QuickAccess>
      <Page.QuickAccess style={{ border: 'none' }}>
        <QuickAccessTitle
          title={t('quickAccess.title')}
          seeMoreTitle={t('quickAccess.seeMore')}
          seeMoreLink="/todo"
        />
        <PreFetchBoundary
          preFetchedQueryClientFN={useQuickAccessTodoPrefetchQuery}
        >
          <QuickAccessTodoList messages={messages1} />
        </PreFetchBoundary>
      </Page.QuickAccess>
      <Page.QuickAccess style={{ border: 'none' }}>
        <QuickAccessTitle
          title={t3('quickAccess.title')}
          seeMoreTitle={t3('quickAccess.seeMore')}
          seeMoreLink="/inventory"
        />
        <PreFetchBoundary
          preFetchedQueryClientFN={useQuickAccessPurchasedPrefetchQuery}
        >
          <QuickAccessInventoryList messages={messages} />
        </PreFetchBoundary>
      </Page.QuickAccess>
    </Stack>
  );
}
