import { PayloadAction, createAction, createSlice } from '@reduxjs/toolkit';
import { PostsState } from '.';
import { RequestStatus } from '../store-types';

const initialState: PostsState = {
  posts: [],
  requestStatus: RequestStatus.Default,
};

export const loadPosts = createAction('posts/loadPosts');

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPostsLoading: (
      state: PostsState,
      action: PayloadAction<RequestStatus>
    ) => {
      state.posts = initialState.posts;
      state.requestStatus = action.payload;
    },
    setPostsFulfilled: (
      state: PostsState,
      { payload: { posts, requestStatus } }
    ) => {
      state.posts = posts;
      state.requestStatus = requestStatus;
    },
    setPostsError: (
      state: PostsState,
      action: PayloadAction<RequestStatus>
    ) => {
      state.posts = initialState.posts;
      state.requestStatus = action.payload;
    },
  },
});

export const { setPostsFulfilled, setPostsLoading, setPostsError } =
  postsSlice.actions;
export default postsSlice.reducer;
