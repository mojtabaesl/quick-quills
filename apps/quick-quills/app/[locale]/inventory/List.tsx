import { Button } from '@/ui/components/Button';
import { IconButton } from '@/ui/components/IconButton';
import { Stack } from '@/ui/components/Stack';
import { TrashIcon } from '@/ui/icons';
import { Flex } from '@radix-ui/themes';
import { BookCard } from 'app/_components/BookCard';

export const InventoryList = () => {
  return (
    <Stack px={'9'} gap={'4'} grow={'1'} asChild>
      <section>
        {Array.from({ length: 10 }, (_, index) => index + 1).map((i) => (
          <BookCard key={i}>
            <BookCard.Info title={'book name' + i} author="Mojtaba" />
            <Flex gap={'6'} align={'center'}>
              <IconButton variant="ghost" color="red">
                <TrashIcon />
              </IconButton>
              <Button color="purple">click here</Button>
            </Flex>
          </BookCard>
        ))}
      </section>
    </Stack>
  );
};
