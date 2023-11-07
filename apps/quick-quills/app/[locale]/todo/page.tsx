import { QuickAccessTitle } from '@/ui/components/QuickAccessTitle';
import { useTranslations } from 'next-intl';
import { SearchBox } from '@/ui/components/SearchBox';
import { TodoList } from './List';
import { Page } from '@/ui/components/Page';

export default function TodoPage() {
  const t = useTranslations('todo');
  return (
    <Page>
      <Page.Header>
        <SearchBox placeholder={t('search')} />
      </Page.Header>
      <Page.Main>
        <TodoList />
      </Page.Main>
      <Page.QuickAccess>
        <QuickAccessTitle
          title={t('quickAccess.title')}
          seeMoreTitle={t('quickAccess.seeMore')}
          seeMoreLink="/inventory"
        />
      </Page.QuickAccess>
    </Page>
  );
}
