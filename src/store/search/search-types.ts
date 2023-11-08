import { Post } from '../../api/posts-api';
import { RequestStatus } from '../store-types';

export interface SearchState {
  searchTerm: string;
  results: Post[];
  requestStatus: RequestStatus;
}
