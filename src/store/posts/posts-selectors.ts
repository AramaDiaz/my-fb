import { RootState } from '../../app-store';

const getFeedPosts = (state: RootState) => state.newsFeed.posts;
const getRequestStatus = (state: RootState) => state.newsFeed.requestStatus;

export default { getFeedPosts, getRequestStatus };
