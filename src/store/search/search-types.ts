import { RequestStatus } from '../store-types';

export interface SearchState {
  searchTerm: string;
  results: Post[];
  requestStatus: RequestStatus;
  error?: string;
}

export interface Post {
  title: string;
  body: string;
  id: number;
  reactions: number;
  tags: string[];
  userId: number;
}
