import { createSlice } from '@reduxjs/toolkit';

import { RequestStatus } from '../store-types';
import { SearchState } from './search-types';

const initialState: SearchState = {
  searchTerm: '',
  results: [],
  requestStatus: RequestStatus.Default,
  error: undefined,
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchQuery: (state: SearchState, action) => {
      state.searchTerm = action.payload;
    },
    setSearchResultsTrigger: (state: SearchState, _action) => {
      state.requestStatus = RequestStatus.Loading;
    },
    setSearchResultsFulfilled: (state: SearchState, action) => {
      state.results = action.payload.posts;
      state.requestStatus = RequestStatus.Fulfilled;
    },
    setSearchError: (state: SearchState, action) => {
      state.requestStatus = RequestStatus.Error;
      state.error = action.payload;
    },
  },
});

export const {
  setSearchQuery,
  setSearchResultsTrigger,
  setSearchResultsFulfilled,
  setSearchError,
} = searchSlice.actions;

export default searchSlice.reducer;
