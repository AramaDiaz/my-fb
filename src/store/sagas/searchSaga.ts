import { call, put, select, takeLatest } from 'redux-saga/effects';

import searchApi from '../../api/search-api';
import { RootState } from '../../app-store';
import {
  setPage,
  setSearchError,
  setSearchResultsFulfilled,
  setSearchResultsTrigger,
} from '../search';

function* onLoadSearchedPosts({
  payload,
}: {
  payload: {
    query: string;
  };
  type: string;
}): Generator {
  try {
    const { query } = payload;
    const currentPage: any = yield select(
      (state: RootState) => state.search.pagination.page
    );
    const response: any = yield call(searchApi.fetchSearch, query, currentPage);

    yield put(
      setSearchResultsFulfilled({
        posts: response.posts,
        totalResults: response.total,
        page: currentPage + 1,
      })
    );
    yield put(setPage(currentPage + 1));
  } catch (error) {
    yield put(setSearchError(error));
  }
}

function* searchedPosts() {
  yield takeLatest(setSearchResultsTrigger.type, onLoadSearchedPosts);
}

export const mySearchSagas = [searchedPosts()];
