import { Button as RadixButton } from '@radix-ui/themes';
import type { ButtonProps } from '@radix-ui/themes/dist/cjs/components/button';

export const Button = ({ style, ...rest }: ButtonProps) => {
  return <RadixButton style={{ cursor: 'pointer', ...style }} {...rest} />;
};
