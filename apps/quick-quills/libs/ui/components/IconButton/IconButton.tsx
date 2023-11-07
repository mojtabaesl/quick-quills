import { IconButton as RadixIconButton } from '@radix-ui/themes';
import type { IconButtonProps } from '@radix-ui/themes/dist/cjs/components/icon-button';

export const IconButton = ({ style, ...rest }: IconButtonProps) => {
  return <RadixIconButton style={{ cursor: 'pointer', ...style }} {...rest} />;
};
