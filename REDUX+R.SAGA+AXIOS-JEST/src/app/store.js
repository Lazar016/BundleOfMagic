// Konfiguracija Redux store-a sa Redux Saga middleware-om
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import postsReducer from '../features/postsSlice';
import rootSaga from '../sagas/postsSaga';

// Kreiranje Redux Saga middleware-a
const sagaMiddleware = createSagaMiddleware();

// Konfiguracija store-a
const store = configureStore({
  reducer: {
    posts: postsReducer, // Reducer za postove
  },
  middleware: [sagaMiddleware], // Dodavanje SAGA middleware-a
});

// Pokretanje sagas-a
sagaMiddleware.run(rootSaga);

export default store;