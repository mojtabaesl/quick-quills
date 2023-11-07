import { useTranslations } from 'next-intl';
import { SearchBox } from '@/ui/components/SearchBox';
import { Page } from '@/ui/components/Page';
import { BooksList } from './List';

export default function BooksPage() {
  const t = useTranslations('inventory');
  return (
    <Page>
      <Page.Header>
        <SearchBox placeholder={t('search')} />
      </Page.Header>
      <Page.Main>
        <BooksList />
      </Page.Main>
    </Page>
  );
}
