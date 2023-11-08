import { RootState } from '../../app-store';

const getSearchTerm = (state: RootState) => state.search.searchTerm;
const getPosts = (state: RootState) => state.search.results;
const getSearchStatus = (state: RootState) => state.search.requestStatus;

export default { getPosts, getSearchTerm, getSearchStatus };
