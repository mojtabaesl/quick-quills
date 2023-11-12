import { Button, Flex, Heading } from '@radix-ui/themes';
import { ExternalLinkIcon } from '@/ui/icons';
import type { Routes } from '@/routes/routes';
import { PageLink } from '@/routes/PageLink';

interface QuickAccessTitleProps {
  seeMoreLink?: Routes;
  seeMoreTitle?: string;
  title: string;
}

export const QuickAccessTitle = ({
  seeMoreTitle,
  title,
  seeMoreLink,
}: QuickAccessTitleProps) => {
  return (
    <Flex gap={'5'} align={'center'}>
      <Heading as="h2" size={'4'}>
        {title}
      </Heading>
      {seeMoreTitle ? (
        <Button size={'1'} color="gray" variant={'soft'} asChild>
          <PageLink href={seeMoreLink ?? '/'}>
            {seeMoreTitle}
            <ExternalLinkIcon size={16} strokeWidth={1.25} />
          </PageLink>
        </Button>
      ) : undefined}
    </Flex>
  );
};
