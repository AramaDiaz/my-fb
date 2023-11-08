import { Post } from '../../api/posts-api';
import { RequestStatus } from '../store-types';

interface SearchState {
  searchTerm: string;
  results: Post[];
  requestStatus: RequestStatus;
}

export default SearchState;
