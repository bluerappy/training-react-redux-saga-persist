
import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import{ AXIOS_GET_POSTS_BY_ID_REQUEST } from '../actions/getAction';

export function* watcherSagaById() {
  yield takeLatest(AXIOS_GET_POSTS_BY_ID_REQUEST , workerSagaById);
}
function* workerSagaById(action) {
  try {
    const response = yield call(fetchById, action.payload.id);
    const data = response.data;
    
    yield put({ type: "AXIOS_GET_POSTS_BY_ID_SUCCESS", payload: data });
  } catch (error) {
    yield put({ type: "AXIOS_GET_POSTS_BY_ID_FAILURE", payload: error });
  }

}

function fetchById(id) {
  return axios(`https://jsonplaceholder.typicode.com/posts/${id}`);
}