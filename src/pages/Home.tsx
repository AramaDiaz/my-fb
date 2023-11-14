import { Box } from '@mui/material';
import { useEffect } from 'react';

import { FeedCard, Loader } from '../components';
import { useAppDispatch, useAppSelector } from '../hooks';
import { getPosts, getSearchStatus, Post } from '../store/search';
import { RequestStatus } from '../store/store-types';

const Home = () => {
  const dispatch = useAppDispatch();

  const searchedPosts = useAppSelector(getPosts);
  const getStatus = useAppSelector(getSearchStatus);

  useEffect(() => {}, [dispatch]);

  return (
    <Box
      display='flex'
      flexDirection='column'
      sx={{
        flex: 1,
        textAlign: 'center',
      }}
    >
      NewsFeed
      {getStatus === RequestStatus.Loading ? (
        <Loader />
      ) : (
        <Box display='flex' flexDirection='column' alignItems='center'>
          {searchedPosts.length > 0 &&
            searchedPosts.map(({ title, body, reactions, id }: Post) => (
              <FeedCard
                key={id}
                title={title}
                body={body}
                reactions={reactions}
              />
            ))}
        </Box>
      )}
    </Box>
  );
};

export default Home;
