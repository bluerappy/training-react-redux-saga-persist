import { takeLatest, call, put, spawn, all } from 'redux-saga/effects';
import axios from 'axios';
import{ AXIOS_GET_POSTS_BY_ID_REQUEST } from '../actions/getAction';

export function* watcherSagaById() {
    console.log("Watcher")
  yield takeLatest(AXIOS_GET_POSTS_BY_ID_REQUEST , workerSagaById);
}
function* workerSagaById(action) {
    console.log("workerID")
    console.log(action)
  try {
    const response = yield call(fetchById, action.payload.id);
    const data = response.data;
    
    yield put({ type: "AXIOS_GET_POSTS_BY_ID_SUCCESS", payload: data });
  } catch (error) {console.log("saga data by id")
    yield put({ type: "AXIOS_GET_POSTS_BY_ID_FAILURE", payload: error });
  }
//   yield spawn (watcherSagaDetails)

}

function fetchById(id) {
    console.log("fetch id")
  return axios(`https://jsonplaceholder.typicode.com/posts/${id}`);
}