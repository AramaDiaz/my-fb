import GroupsIcon from '@mui/icons-material/Groups2Outlined';
import HomeIcon from '@mui/icons-material/Home';
import VideoIcon from '@mui/icons-material/OndemandVideo';
import MarketIcon from '@mui/icons-material/Storefront';
import GamingIcon from '@mui/icons-material/VideogameAssetOutlined';
import { Avatar, Box, IconButton } from '@mui/material';
import { useEffect } from 'react';

import { ROUTES } from '../app-constants';
import { ReactComponent as FacebookLogo } from '../assets/icons/facebook-icon.svg';
import { ReactComponent as Menu } from '../assets/icons/menu.svg';
import { ReactComponent as Messenger } from '../assets/icons/messenger.svg';
import { ReactComponent as Notifications } from '../assets/icons/notifications.svg';
import myImg from '../assets/images/pic.jpg';
import { PageTabs, SearchField } from '../components';
import { useAppDispatch, useAppSelector } from '../hooks';
import {
  getSearchTerm,
  setSearchQuery,
  setSearchResultsTrigger,
} from '../store/search';

const Header = () => {
  const dispatch = useAppDispatch();
  const search = useAppSelector(getSearchTerm);

  const handleSearch = (searchTerm: string) => {
    dispatch(setSearchQuery(searchTerm));
    dispatch(setSearchResultsTrigger(searchTerm));
  };

  const navigationTabs = [
    {
      href: ROUTES.HOME,
      index: 0,
      icon: <HomeIcon fontSize='large' />,
      label: 'Home',
    },
    {
      href: ROUTES.VIDEOS,
      index: 1,
      icon: <VideoIcon fontSize='large' />,
      label: 'Videos',
    },
    {
      href: ROUTES.MARKETPLACE,
      index: 2,
      icon: <MarketIcon fontSize='large' />,
      label: 'Marketplace',
    },
    {
      href: ROUTES.GROUPS,
      index: 3,
      icon: <GroupsIcon fontSize='large' />,
      label: 'Groups',
    },
    {
      href: ROUTES.GAMES,
      index: 4,
      icon: <GamingIcon fontSize='large' />,
      label: 'Gaming',
    },
  ];

  useEffect(() => {
    dispatch(setSearchResultsTrigger(search));
  }, [dispatch]);

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
        <SearchField defaultValue={search} onSearch={handleSearch} />
      </Box>

      <PageTabs navigationTabs={navigationTabs} />

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
