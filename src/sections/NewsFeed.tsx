import { Box } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../hooks';
import { FeedCard, Loader } from '../components';
import { Post } from '../api/posts-api';
import { searchSelectors } from '../store/search';
import { loadPosts, postsSelector } from '../store/posts';
import { useEffect } from 'react';
import { RequestStatus } from '../store/store-types';

const NewsFeed = () => {
  const dispatch = useAppDispatch();

  const searchedPosts = useAppSelector(searchSelectors.getPosts);
  const getSearchStatus = useAppSelector(searchSelectors.getSearchStatus);
  const initialPosts = useAppSelector(postsSelector.getFeedPosts);
  const getPostsStatus = useAppSelector(postsSelector.getRequestStatus);

  useEffect(() => {
    dispatch(loadPosts());
  }, [dispatch]);

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
      {getPostsStatus === RequestStatus.Loading ||
      getSearchStatus === RequestStatus.Loading ? (
        <Loader />
      ) : (
        <Box display='flex' flexDirection='column' alignItems='center'>
          {searchedPosts.length
            ? searchedPosts.map(({ title, body, reactions, id }: Post) => (
                <FeedCard
                  key={id}
                  title={title}
                  body={body}
                  reactions={reactions}
                />
              ))
            : initialPosts &&
              initialPosts.map(({ title, body, reactions, id }: Post) => (
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

export default NewsFeed;
