import { Search } from '@mui/icons-material';
import ClearIcon from '@mui/icons-material/Clear';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import { useEffect, useState } from 'react';

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

  const handleClick = () => {
    setSearchTerm('');
    clearSearch();
  };

  useEffect(() => {
    if (searchTerm !== defaultValue) onSearch(searchTerm);
  }, [searchTerm]);

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
