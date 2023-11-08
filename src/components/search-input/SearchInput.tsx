import { useState, useEffect } from 'react';
import { Search } from '@mui/icons-material';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';

interface SearchProps {
  defaultValue: string;
  onSearch: (searchTerm: string) => void;
  clearSearch: () => void;
}

const SearchInput = ({ defaultValue, onSearch, clearSearch }: SearchProps) => {
  const [searchTerm, setSearchTerm] = useState<string>(defaultValue || '');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') onSearch(searchTerm);
  };

  useEffect(() => {
    if (searchTerm !== defaultValue) onSearch(searchTerm);
  }, [searchTerm]);

  const handleClick = () => {
    setSearchTerm('');
    console.log('in serach input');
    clearSearch();
  };

  const endAdornment = () => {
    if (searchTerm) {
      return (
        <InputAdornment position='end'>
          <IconButton onClick={handleClick}>
            <ClearIcon />
          </IconButton>
        </InputAdornment>
      );
    }
  };

  return (
    <>
      <TextField
        size='small'
        variant='outlined'
        placeholder='Search Facebook'
        onChange={handleChange}
        value={searchTerm}
        onKeyDown={handleKeyDown}
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
    </>
  );
};

export default SearchInput;
