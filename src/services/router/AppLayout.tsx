import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';

import { Contacts, Header, LeftSidebar } from '../../sections';

const AppLayout = () => (
  <Box width='100%'>
    <Header />
    <Box
      sx={{
        display: 'flex',
        height: 'auto',
        backgroundColor: '#f0f2f5',
        paddingInline: 1,
      }}
    >
      <LeftSidebar />
      <Outlet />
      <Contacts />
    </Box>
  </Box>
);

export default AppLayout;
