import { RequestStatus } from '../store-types';

export interface SearchState {
  searchTerm: string;
  results: Post[];
  pagination: {
    page: number;
    totalResults: number;
  };
  error?: string;
  requestStatus: RequestStatus;
}

export interface Post {
  title: string;
  body: string;
  id: number;
  reactions: number;
  tags: string[];
  userId: number;
}
