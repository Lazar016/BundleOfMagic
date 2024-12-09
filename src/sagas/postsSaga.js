import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchPostsSuccess, fetchPostsFailure } from '../features/postsSlice';
import { fetchPostsFromApi } from '../api/postApi';

function* fetchPostsSaga() {
  try {
    const posts = yield call(fetchPostsFromApi);
    yield put(fetchPostsSuccess(posts));
  } catch (error) {
    yield put(fetchPostsFailure(error.message));
  }
}

export function* watchFetchPosts() {
  yield takeEvery('posts/fetchPosts', fetchPostsSaga);
}
