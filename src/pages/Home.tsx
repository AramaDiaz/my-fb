import { Box, Typography } from '@mui/material';
import InfiniteScroll from 'react-infinite-scroll-component';

import { FeedCard, Loader } from '../components';
import { useAppDispatch, useAppSelector } from '../hooks';
import {
  getPage,
  getPosts,
  getSearchStatus,
  getSearchTerm,
  getTotalResults,
  Post,
  setSearchResultsTrigger,
} from '../store/search';
import { RequestStatus } from '../store/store-types';

const Home = () => {
  const dispatch = useAppDispatch();
  const searchedPosts = useAppSelector(getPosts);
  const search = useAppSelector(getSearchTerm);
  const totalPosts = useAppSelector(getTotalResults);
  const getStatus = useAppSelector(getSearchStatus);
  const page = useAppSelector(getPage);

  const getMorePosts = () => {
    dispatch(
      setSearchResultsTrigger({
        query: search,
        page,
      })
    );
  };

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
      {getStatus === RequestStatus.Loading && <Loader />}
      {getStatus === RequestStatus.Error && <div>Error. Please try again</div>}
      <InfiniteScroll
        dataLength={10}
        next={getMorePosts}
        hasMore={page * 10 < totalPosts}
        loader={<div>isLoading...</div>}
        endMessage={
          page * 10 > totalPosts && (
            <Typography style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </Typography>
          )
        }
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {searchedPosts.length > 0 &&
          searchedPosts.map(({ title, body, reactions, id }: Post) => (
            <FeedCard
              key={id}
              title={title}
              body={body}
              reactions={reactions}
            />
          ))}
      </InfiniteScroll>
    </Box>
  );
};

export default Home;
