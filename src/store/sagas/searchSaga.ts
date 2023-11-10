import { call, put, takeLatest } from 'redux-saga/effects';

import searchApi from '../../api/search-api';
import {
  // clearSearch,
  // resetSearchTerm,
  // resetSearchQuery,
  setSearchError,
  setSearchQuery,
  setSearchResultsFulfilled,
  setSearchResultsLoading,
} from '../search';
import { RequestStatus } from '../store-types';

function* onLoadSearchedPosts({
  payload,
}: {
  payload: string;
  type: string;
}): Generator {
  yield put(setSearchResultsLoading(RequestStatus.Loading));
  try {
    const postId = payload;
    const response: any = yield call(searchApi.fetchSearch, postId);

    yield put(
      setSearchResultsFulfilled({
        posts: response.posts,
        requestStatus: RequestStatus.Fulfilled,
      })
    );
  } catch (error) {
    yield put(setSearchError(RequestStatus.Error));
  }
}

function* searchedPosts() {
  yield takeLatest(setSearchQuery.type, onLoadSearchedPosts);
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