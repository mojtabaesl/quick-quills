import { Loading as LoadingUI } from '@/ui/components/Loading';
import { Stack } from '@/ui/components/Stack';

export default function Loading() {
  return (
    <Stack justify={'center'} align={'center'}>
      <LoadingUI />
    </Stack>
  );
}
