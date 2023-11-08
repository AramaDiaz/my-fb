import { combineReducers } from '@reduxjs/toolkit';
import { postsReducer } from './posts';
import { searchReducer } from './search';

const rootReducer = combineReducers({
  newsFeed: postsReducer,
  search: searchReducer,
});

export default rootReducer;
