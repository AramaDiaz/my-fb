import GroupsIcon from '@mui/icons-material/Groups2Outlined';
import HomeIcon from '@mui/icons-material/Home';
import VideoIcon from '@mui/icons-material/OndemandVideo';
import MarketIcon from '@mui/icons-material/Storefront';
import GamingIcon from '@mui/icons-material/VideogameAssetOutlined';
import { Tab, Tabs } from '@mui/material';
import { useState } from 'react';

const PageTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Tabs
      value={value}
      variant='fullWidth'
      onChange={handleChange}
      centered
      sx={{
        '& .MuiButtonBase-root.MuiTab-root.Mui-selected': {
          color: '#0a66ff',
        },
        '& .MuiTabs-indicator': { backgroundColor: '#0a66ff' },
      }}
    >
      <Tab icon={<HomeIcon fontSize='large' />} aria-label='Home' />
      <Tab icon={<VideoIcon fontSize='large' />} aria-label='Video' />
      <Tab icon={<MarketIcon fontSize='large' />} aria-label='Marketplace' />
      <Tab icon={<GroupsIcon fontSize='large' />} aria-label='Groups' />
      <Tab icon={<GamingIcon fontSize='large' />} aria-label='Gaming' />
    </Tabs>
  );
};

export default PageTabs;
