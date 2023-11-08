import { call, fork, put, takeLatest } from 'redux-saga/effects';

import postsApi from '../../api/posts-api';
import {
  loadPosts,
  setPostsError,
  setPostsFulfilled,
  setPostsLoading,
} from '../posts';
import { RequestStatus } from '../store-types';

function* onLoadPosts(): Generator {
  yield put(setPostsLoading(RequestStatus.Loading));
  try {
    const response: any = yield call(postsApi.fetchFeeds);
    yield put(
      setPostsFulfilled({
        posts: response.posts,
        requestStatus: RequestStatus.Fulfilled,
      })
    );
  } catch (error) {
    yield put(setPostsError(RequestStatus.Error));
  }
}

function* feedPosts() {
  yield takeLatest(loadPosts.type, onLoadPosts);
}

export const myPostsSaga = [fork(feedPosts)];
