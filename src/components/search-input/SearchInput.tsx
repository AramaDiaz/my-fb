import { Search } from '@mui/icons-material';
import ClearIcon from '@mui/icons-material/Clear';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import { useEffect, useState } from 'react';

import { useDebounce } from '../../utils';

interface SearchProps {
  defaultValue: string;
  onSearch: (searchTerm: string) => void;
  onClear: () => void;
}

const SearchInput = ({ defaultValue, onSearch, onClear }: SearchProps) => {
  const [searchTerm, setSearchTerm] = useState<string>(defaultValue || '');
  const debouncedSearchValue = useDebounce(searchTerm);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchTerm(value);
  };

  const handleClick = () => {
    setSearchTerm('');
    onClear();
  };

  useEffect(() => {
    onSearch(debouncedSearchValue);
  }, [debouncedSearchValue]);

  const endAdornment = () => {
    if (searchTerm !== '') {
      return (
        <InputAdornment position='end'>
          <IconButton onClick={handleClick}>
            <ClearIcon />
          </IconButton>
        </InputAdornment>
      );
    }

    return '';
  };

  return (
    <TextField
      size='small'
      variant='outlined'
      placeholder='Search Facebook'
      onChange={handleChange}
      value={searchTerm}
      sx={{
        paddingY: 1,
        '& .MuiInputBase-root': {
          backgroundColor: '#f0f2f5',
          borderRadius: '25px',
        },
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position='start'>
            <Search />
          </InputAdornment>
        ),
        endAdornment: endAdornment(),
      }}
    />
  );
};

export default SearchInput;
