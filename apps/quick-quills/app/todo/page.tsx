import { QuickAccessSection } from '@/ui/components/QuickAccessSection';
import { QuickAccessTitle } from '@/ui/components/QuickAccessTitle';
import { Flex } from '@radix-ui/themes';

export default function TodoPage() {
  return (
    <Flex grow={'1'} direction={'column'}>
      <Flex px={'9'} grow={'1'} asChild>
        <section>todo list</section>
      </Flex>
      <QuickAccessSection>
        <QuickAccessTitle
          title="Recently Purchased Books"
          seeMoreTitle="See All Purchased Books"
          seeMoreLink="/inventory"
        />
      </QuickAccessSection>
    </Flex>
  );
}
