import { QuickAccessTitle } from '@/ui/components/QuickAccessTitle';
import { useTranslations } from 'next-intl';
import { SearchBox } from '@/ui/components/SearchBox';
import { Page } from '@/ui/components/Page';
import { InventoryList } from './List';

export default function TodoPage() {
  const t = useTranslations('inventory');
  return (
    <Page>
      <Page.Header>
        <SearchBox placeholder={t('search')} />
      </Page.Header>
      <Page.Main>
        <InventoryList />
      </Page.Main>
      <Page.QuickAccess>
        <QuickAccessTitle
          title={t('quickAccess.title')}
          seeMoreTitle={t('quickAccess.seeMore')}
          seeMoreLink="/todo"
        />
      </Page.QuickAccess>
    </Page>
  );
}
