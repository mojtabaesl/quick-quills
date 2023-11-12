import { IconButton as RadixIconButton } from '@radix-ui/themes';
import type { IconButtonProps } from '@radix-ui/themes/dist/cjs/components/icon-button';
import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import { forwardRef } from 'react';

type MyIconButtonProps = ForwardRefExoticComponent<
  IconButtonProps & RefAttributes<HTMLButtonElement>
>;

export const IconButton: MyIconButtonProps = forwardRef(
  ({ style, ...rest }, ref) => {
    return (
      <RadixIconButton
        style={{ cursor: 'pointer', ...style }}
        ref={ref}
        {...rest}
      />
    );
  }
);

IconButton.displayName = 'IconButton';
