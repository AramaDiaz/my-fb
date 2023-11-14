import { Tab } from '@mui/material';
import { ReactElement } from 'react';
import { Link } from 'react-router-dom';

export interface LinkTabProps {
  href: string;
  value: number;
  icon: ReactElement;
  label: string;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

const LinkTab = ({ href, label, icon, value, onChange }: LinkTabProps) => {
  const handleClick = (event: React.SyntheticEvent) => {
    onChange(event, value);
  };

  return (
    <Tab
      component={Link}
      to={href}
      value={value}
      icon={icon}
      aria-label={label}
      onClick={handleClick}
    />
  );
};

export default LinkTab;
