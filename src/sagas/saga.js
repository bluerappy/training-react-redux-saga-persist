import { takeLatest, call, put, spawn, all } from 'redux-saga/effects';
import axios from 'axios';
import{ AXIOS_GET_POSTS_REQUEST } from '../actions/getAction';
import { watcherSagaById } from '../sagas/byIdSaga';


export function* watcherSaga() {
  yield takeLatest(AXIOS_GET_POSTS_REQUEST , workerSaga);
}

function* workerSaga() {
  
  try {
    const response = yield call(fetchTotalList);
    const data = response.data;
    yield put({ type: "AXIOS_GET_POSTS_SUCCESS", payload: data });
  } catch (error) {
    yield put({ type: "AXIOS_GET_POSTS_FAILURE", payload: error });
  }
  yield spawn (watcherSagaById)

}

function fetchTotalList() {
  return axios('https://jsonplaceholder.typicode.com/comments');
}