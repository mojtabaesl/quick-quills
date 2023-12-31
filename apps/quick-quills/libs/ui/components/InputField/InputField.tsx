import { Text, TextField } from '@radix-ui/themes';
import type { TextFieldInputProps } from '@radix-ui/themes/dist/cjs/components/text-field';
import { forwardRef } from 'react';
import { Stack } from '../Stack';
import { If } from '../If';

interface InputFieldProps extends TextFieldInputProps {
  label?: string;
  error?: string;
  withAsterisk?: boolean;
}

interface InputLabelProps {
  children?: string;
  withAsterisk?: boolean;
  htmlFor?: string;
}

function FormFieldLabel({ children, withAsterisk, htmlFor }: InputLabelProps) {
  return (
    <Text as="label" htmlFor={htmlFor}>
      {children}
      <If condition={Boolean(withAsterisk)}>
        <Text ml={'1'} color="red">
          *
        </Text>
      </If>
    </Text>
  );
}

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ id, label, error, withAsterisk, ...rest }, ref) => {
    return (
      <Stack gap={'2'}>
        <If condition={Boolean(label)}>
          <FormFieldLabel htmlFor={id} withAsterisk={withAsterisk}>
            {label}
          </FormFieldLabel>
        </If>
        <Stack gap={'2'}>
          <TextField.Input
            id={id}
            ref={ref}
            color="gray"
            variant="soft"
            {...rest}
          />
          <If condition={Boolean(error)}>
            <Text size={'1'} color="red">
              {error}
            </Text>
          </If>
        </Stack>
      </Stack>
    );
  }
);

InputField.displayName = 'InputField';
