import { call, put, takeEvery, delay } from 'redux-saga/effects';
import axios from 'axios';
import { fetchPosts, clearPosts } from '../features/postsSlice';

// Funkcija koja poziva API
function fetchPostsFromAPI() {
  return axios.get('https://jsonplaceholder.typicode.com/posts');
}

// Saga radnik za asinhrono učitavanje
function* loadPostsSaga() {
  try {
    yield delay(500); // Simulacija kašnjenja
    const response = yield call(fetchPostsFromAPI); // Poziv API-ja
    yield put(fetchPosts.fulfilled(response.data)); // Slanje uspešne akcije
  } catch (error) {
    yield put(fetchPosts.rejected(error)); // Slanje greške
  }
}

// Saga koja nadgleda radnje
export default function* rootSaga() {
  yield takeEvery('posts/fetchPosts', loadPostsSaga); // Praćenje svake akcije
}