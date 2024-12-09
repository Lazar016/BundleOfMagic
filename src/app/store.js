import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '../features/postsSlice'; 
import createSagaMiddleware from 'redux-saga';
import { watchFetchPosts } from '../sagas/postsSaga'; 


const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(watchFetchPosts);

export default store;