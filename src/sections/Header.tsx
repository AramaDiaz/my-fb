import { Avatar, Box, IconButton } from '@mui/material';
import { useEffect, useState } from 'react';
import { PageTabs, SearchField } from '../components';
import { ReactComponent as FacebookLogo } from '../assests/icons/facebook-icon.svg';
import { ReactComponent as Menu } from '../assests/icons/menu.svg';
import { ReactComponent as Messenger } from '../assests/icons/messenger.svg';
import { ReactComponent as Notifications } from '../assests/icons/notifications.svg';
import myImg from '../assests/images/pic.jpg';
import { useAppDispatch } from '../hooks';
import { setSearchQuery, resetSearchQuery } from '../store/search';
import { useDebounce } from '../utils';

const Header = () => {
  const [query, setQuery] = useState<string>('');
  const dispatch = useAppDispatch();

  const handleSearch = (searchTerm: string) => {
    setQuery(searchTerm);
  };

  const clearQuery = () => {
    setQuery('');
    console.log('in header');
    dispatch(resetSearchQuery());
  };

  const debouncedSearchValue = useDebounce(query);

  useEffect(() => {
    debouncedSearchValue && dispatch(setSearchQuery(debouncedSearchValue));
  }, [dispatch, debouncedSearchValue]);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        boxShadow: '0px 2px 2px lightgrey',
        marginBottom: '3px',
      }}
    >
      <Box display='flex'>
        <Avatar sx={{ padding: 1, bgcolor: 'transparent' }}>
          <FacebookLogo />
        </Avatar>
        <SearchField
          defaultValue={query}
          onSearch={handleSearch}
          clearSearch={clearQuery}
        />
      </Box>
      <PageTabs />
      <Box display='flex' padding={1} gap={1}>
        <IconButton
          sx={{ backgroundColor: '#e4e6eb', color: 'black', fontWeight: 600 }}
        >
          <Menu />
        </IconButton>
        <IconButton sx={{ backgroundColor: '#e4e6eb' }}>
          <Messenger />
        </IconButton>
        <IconButton sx={{ backgroundColor: '#e4e6eb' }}>
          <Notifications />
        </IconButton>
        <IconButton
          sx={{
            backgroundColor: '#e4e6eb',
            color: 'black',
            backgroundImage: `url(${myImg})`,
            backgroundRepeat: 'no repeat',
            backgroundSize: 'cover',
            width: '40px',
          }}
        />
      </Box>
    </Box>
  );
};

export default Header;