import { Box } from '@mui/material';

import { Contacts, Header, LeftSidebar, NewsFeed } from './sections';

const App = () => (
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
      <NewsFeed />
      <Contacts />
    </Box>
  </Box>
);

export default App;
