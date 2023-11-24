import { Tabs } from '@mui/material';
import { ReactElement, SyntheticEvent, useState } from 'react';

import LinkTab from './LinkTab';

interface PageTabsProps {
  navigationTabs: Array<{
    href: string;
    index: number;
    icon: ReactElement;
    label: string;
  }>;
}

const PageTabs = ({ navigationTabs }: PageTabsProps) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
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
      {navigationTabs.map(({ href, index, icon, label }) => (
        <LinkTab
          key={index}
          href={href}
          value={index}
          icon={icon}
          label={label}
          onChange={handleChange}
        />
      ))}
    </Tabs>
  );
};

export default PageTabs;
