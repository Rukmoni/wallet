import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';

import createSagaMiddleware from 'redux-saga';
import walletSlice from './walletSlice';
import {watcherSaga} from './sagas/walletWatcherSaga';
const sagaMiddleware = createSagaMiddleware();
const reducer = combineReducers({
  wallet: walletSlice,
});
const store = configureStore({
  reducer,
  middleware: [...getDefaultMiddleware({thunk: false}), sagaMiddleware],
});
sagaMiddleware.run(watcherSaga);
export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
