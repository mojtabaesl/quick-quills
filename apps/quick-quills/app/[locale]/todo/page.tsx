import { QuickAccessSection } from '@/ui/components/QuickAccessSection';
import { QuickAccessTitle } from '@/ui/components/QuickAccessTitle';
import { Flex } from '@radix-ui/themes';
import { useTranslations } from 'next-intl';

export default function TodoPage() {
  const t = useTranslations('todo.quickAccess');
  return (
    <Flex grow={'1'} direction={'column'}>
      <Flex px={'9'} grow={'1'} asChild>
        <section>todo list</section>
      </Flex>
      <QuickAccessSection>
        <QuickAccessTitle
          title={t('title')}
          seeMoreTitle={t('seeMore')}
          seeMoreLink="/inventory"
        />
      </QuickAccessSection>
    </Flex>
  );
}
