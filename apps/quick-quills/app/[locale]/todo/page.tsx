import { BookCard } from '../../_components/BookCard';
import { QuickAccessSection } from '@/ui/components/QuickAccessSection';
import { QuickAccessTitle } from '@/ui/components/QuickAccessTitle';
import { Stack } from '@/ui/components/Stack';
import { Flex, ScrollArea } from '@radix-ui/themes';
import { useTranslations } from 'next-intl';
import { SearchBox } from '@/ui/components/SearchBox';

export default function TodoPage() {
  const t = useTranslations('todo');
  return (
    <Stack grow={'1'}>
      <Flex px={'9'} py={'4'} gap={'4'} grow={'1'}>
        <SearchBox placeholder={t('search')} />
      </Flex>
      <ScrollArea type="always" scrollbars="vertical">
        <Stack px={'9'} gap={'4'} grow={'1'} asChild>
          <section>
            {/* TODO: Remove this */}
            {Array.from({ length: 10 }, (_, index) => index + 1).map((i) => (
              <BookCard
                title={'book name' + ' ' + i}
                author="Mojtaba"
                key={i}
              />
            ))}
          </section>
        </Stack>
      </ScrollArea>
      <QuickAccessSection>
        <QuickAccessTitle
          title={t('quickAccess.title')}
          seeMoreTitle={t('quickAccess.seeMore')}
          seeMoreLink="/inventory"
        />
      </QuickAccessSection>
    </Stack>
  );
}
