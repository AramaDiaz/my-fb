import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './store/rootReducer';
import rootSaga from './store/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
