import { combineReducers } from '@reduxjs/toolkit';

import { searchReducer } from './search';

const rootReducer = combineReducers({
  search: searchReducer,
});

export default rootReducer;
