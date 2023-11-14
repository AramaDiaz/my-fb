import { call, put, takeLatest } from 'redux-saga/effects';

import searchApi from '../../api/search-api';
import {
  setSearchError,
  setSearchResultsFulfilled,
  setSearchResultsTrigger,
} from '../search';

function* onLoadSearchedPosts({
  payload,
}: {
  payload: string;
  type: string;
}): Generator {
  try {
    const postId = payload;
    const response: any = yield call(searchApi.fetchSearch, postId);

    yield put(
      setSearchResultsFulfilled({
        posts: response.posts,
      })
    );
  } catch (error) {
    yield put(setSearchError(error));
  }
}

function* searchedPosts() {
  yield takeLatest(setSearchResultsTrigger.type, onLoadSearchedPosts);
}

// function* onClearSearchedPosts(): Generator {
//   try {
//     yield put(setSearchQuery(''));
//     yield put(
//       setSearchResultsFulfilled({
//         payload: { posts: [], requestStatus: RequestStatus.Default },
//       })
//     );
//   } catch (error) {
//     yield put(setSearchError(RequestStatus.Error));
//     console.error('Error in resetSearchStateSaga:', error);
//   }
// }

// function* clearSearchedPosts() {
//   yield takeLatest(resetSearchQuery.type, onClearSearchedPosts);
// }

export const mySearchSagas = [
  searchedPosts(),
  // clearSearchedPosts()
];
