import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';

import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import walletSlice from './walletSlice';
import {watcherSaga} from './sagas/walletWatcherSaga';


//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const sagaMiddleware = createSagaMiddleware();
const reducer = combineReducers({
  wallet: walletSlice,
});
const store = configureStore({
  reducer,

  middleware: [...getDefaultMiddleware({thunk: false}), sagaMiddleware, logger],
});
sagaMiddleware.run(watcherSaga);
export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
