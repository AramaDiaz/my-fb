import { Button } from '@mui/material';
import { ReactNode } from 'react';

interface CustomButtonProps {
  text: string;
  icon: ReactNode;
}

const CustomButton = ({ text, icon }: CustomButtonProps) => (
  <Button
    variant='text'
    sx={{
      width: '33%',
      borderRadius: 1,
      color: 'darkgrey',
      fontWeight: 600,
      textTransform: 'none',
      fontSize: 'large',
      '&:hover': { backgroundColor: '#f0f2f5' },
    }}
    startIcon={icon}
  >
    {text}
  </Button>
);

export default CustomButton;
