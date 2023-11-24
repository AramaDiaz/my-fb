import { createSlice } from '@reduxjs/toolkit';

import { RequestStatus } from '../store-types';
import { SearchState } from './search-types';

const initialState: SearchState = {
  searchTerm: '',
  results: [],
  pagination: {
    page: 0,
    totalResults: 0,
  },
  error: undefined,
  requestStatus: RequestStatus.Default,
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchQuery: (state: SearchState, action) => {
      state.searchTerm = action.payload;
    },
    setPage: (state, action) => {
      state.pagination.page = action.payload;
    },
    setSearchResultsTrigger: (state: SearchState, _action) => {
      state.requestStatus = RequestStatus.Loading;
    },
    setSearchResultsFulfilled: (
      state: SearchState,
      { payload: { posts, totalResults } }
    ) => {
      state.results =
        state.searchTerm.length > 0
          ? [...initialState.results, ...posts]
          : [...state.results, ...posts];
      state.pagination.totalResults = totalResults;
      state.requestStatus = RequestStatus.Fulfilled;
    },
    setSearchError: (state: SearchState, action) => {
      state.requestStatus = RequestStatus.Error;
      state.error = action.payload.message;
    },
    resetSearchState: (state) => {
      state.searchTerm = '';
      state.results = [];
      state.pagination.page = 0;
    },
  },
});

export const {
  setSearchQuery,
  setPage,
  setSearchResultsTrigger,
  setSearchResultsFulfilled,
  setSearchError,
  resetSearchState,
} = searchSlice.actions;

export default searchSlice.reducer;
