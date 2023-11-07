'use client';

import { TextField } from '@radix-ui/themes';
import { IconButton } from '../IconButton';
import { SearchIcon, XCircleIcon } from '@/ui/icons';
import { useRef, useState } from 'react';

interface SearchBoxProps {
  placeholder?: string;
}

export const SearchBox = ({ placeholder }: SearchBoxProps) => {
  const [searchText, setSearchText] = useState('');
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleClear = () => {
    setSearchText('');
    searchInputRef.current?.focus();
  };

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
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <TextField.Slot pr="3">
        <IconButton size="2" variant="ghost" color="gray" onClick={handleClear}>
          <XCircleIcon size={20} strokeWidth={1.5} />
        </IconButton>
      </TextField.Slot>
    </TextField.Root>
  );
};
