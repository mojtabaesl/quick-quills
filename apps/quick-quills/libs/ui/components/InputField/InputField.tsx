import { Text, TextField } from '@radix-ui/themes';
import type { TextFieldInputProps } from '@radix-ui/themes/dist/cjs/components/text-field';
import { forwardRef } from 'react';
import { Stack } from '../Stack';

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
      {withAsterisk ? (
        <Text ml={'1'} color="red">
          *
        </Text>
      ) : null}
    </Text>
  );
}

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ id, label, error, withAsterisk, ...rest }, ref) => {
    return (
      <Stack gap={'2'}>
        {label ? (
          <FormFieldLabel htmlFor={id} withAsterisk={withAsterisk}>
            {label}
          </FormFieldLabel>
        ) : null}
        <Stack gap={'2'}>
          <TextField.Input
            id={id}
            ref={ref}
            color="gray"
            variant="soft"
            {...rest}
          />
          {error ? (
            <Text size={'1'} color="red">
              {error}
            </Text>
          ) : null}
        </Stack>
      </Stack>
    );
  }
);

InputField.displayName = 'InputField';
