import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import SearchState from './search-types';
import { RequestStatus } from '../store-types';

const initialState: SearchState = {
  searchTerm: '',
  results: [],
  requestStatus: RequestStatus.Default,
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchQuery: (state: SearchState, action) => {
      state.searchTerm = action.payload;
    },
    setSearchResultsFulfilled: (state: SearchState, action) => {
      state.results = action.payload.posts;
      state.requestStatus = action.payload.requestStatus;
    },
    setSearchResultsLoading: (
      state: SearchState,
      action: PayloadAction<RequestStatus>
    ) => {
      state.requestStatus = action.payload;
    },

    setSearchError: (
      state: SearchState,
      action: PayloadAction<RequestStatus>
    ) => {
      state.requestStatus = action.payload;
    },
    resetSearchQuery: () => {
      return { ...initialState };
    },
  },
});

export const {
  setSearchQuery,
  setSearchResultsFulfilled,
  setSearchResultsLoading,
  setSearchError,
  resetSearchQuery,
} = searchSlice.actions;

export default searchSlice.reducer;
