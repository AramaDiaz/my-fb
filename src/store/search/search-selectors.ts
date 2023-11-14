import { RootState } from '../../app-store';

export const getSearchTerm = (state: RootState) => state.search.searchTerm;
export const getPosts = (state: RootState) => state.search.results;
export const getSearchStatus = (state: RootState) => state.search.requestStatus;
