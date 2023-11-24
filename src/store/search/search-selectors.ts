import { RootState } from '../../app-store';

export const getSearchTerm = (state: RootState) => state.search.searchTerm;
export const getPage = (state: RootState) => state.search.pagination.page;
export const getPosts = (state: RootState) => state.search.results;
export const getTotalResults = (state: RootState) =>
  state.search.pagination.totalResults;
export const getSearchStatus = (state: RootState) => state.search.requestStatus;
