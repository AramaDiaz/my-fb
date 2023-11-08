import { Post } from '../../api/posts-api';
import { RequestStatus } from '../store-types';

export interface PostsState {
  posts: Post[];
  requestStatus: RequestStatus;
}

// export interface SuccessPosts {
//   posts: Post[];
//   requestStatus: RequestStatus;
// }
