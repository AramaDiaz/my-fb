import { takeLatest, put, call, fork } from 'redux-saga/effects';
import {
  setSearchResultsLoading,
  setSearchQuery,
  setSearchResultsFulfilled,
  setSearchError,
  // clearSearch,
  // resetSearchTerm,
  resetSearchQuery,
} from '../search';
import searchApi from '../../api/search-api';
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
    console.log('error', error);
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
