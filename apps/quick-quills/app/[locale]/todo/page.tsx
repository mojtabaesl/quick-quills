import { QuickAccessTitle } from '@/ui/components/QuickAccessTitle';
import { useTranslations } from 'next-intl';
import { SearchBox } from '@/ui/components/SearchBox';
import { TodoList } from './List';
import { Page } from '@/ui/components/Page';
import { BookCard } from 'app/_components/BookCard';
import { Button } from '@/ui/components/Button';
import { Flex } from '@radix-ui/themes';

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
        <Flex gap={'3'}>
          <BookCard>
            <BookCard.Info title="new book" author="Fateme" />
            <Button color="gray" variant="soft">
              Return To TodoList
            </Button>
          </BookCard>
          <BookCard>
            <BookCard.Info title="new book" author="Fateme" />
            <Button color="gray" variant="soft">
              Return To TodoList
            </Button>
          </BookCard>
          <BookCard>
            <BookCard.Info title="new book" author="Fateme" />
            <Button color="gray" variant="soft">
              Return To TodoList
            </Button>
          </BookCard>
        </Flex>
      </Page.QuickAccess>
    </Page>
  );
}
