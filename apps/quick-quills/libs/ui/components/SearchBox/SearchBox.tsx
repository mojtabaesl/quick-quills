'use client';

import { TextField } from '@radix-ui/themes';
import { IconButton } from '../IconButton';
import { SearchIcon, XCircleIcon } from '@/ui/icons';
import type { SetStateAction } from 'react';
import { useEffect, useRef } from 'react';
import { Loading } from '../Loading';

interface SearchBoxProps {
  placeholder?: string;
  value: string;
  onChange: (value: SetStateAction<string>) => void;
  isLoading?: boolean;
}

export const SearchBox = ({
  isLoading,
  value,
  onChange,
  placeholder,
}: SearchBoxProps) => {
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleClear = () => {
    onChange('');
    searchInputRef.current?.focus();
  };

  useEffect(() => {
    if (value) {
      searchInputRef.current?.focus();
    }
  }, [value]);

  return (
    <TextField.Root>
      <TextField.Slot>
        <SearchIcon />
      </TextField.Slot>
      <TextField.Input
        ref={searchInputRef}
        placeholder={placeholder}
        size="3"
        variant="surface"
        color="purple"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <TextField.Slot pr="3">
        {isLoading ? (
          <Loading />
        ) : (
          <IconButton
            size="2"
            variant="ghost"
            color="gray"
            onClick={handleClear}
          >
            <XCircleIcon size={20} strokeWidth={1.5} />
          </IconButton>
        )}
      </TextField.Slot>
    </TextField.Root>
  );
};
