import {put, call,takeEvery} from 'redux-saga/effects'
import * as actionType from './actionTypes';
import {apiGET} from './utils/api'

function *uploadCoverList () {
  const response = yield call (apiGET,'/api/random')
  console.log('api--->',response.data);
  yield put({type: actionType.HANDLE_COVER_LIST,payload:{coverList:response.data}})
}

function *searchCover (payload) {
  const response = yield call (apiGET,`/api/search?s=${payload.content}&page=${payload.page}`)
  console.log('payload--->',Math.ceil(response.count));
  yield put({type: actionType.HANDLE_PAGE,payload:{count:Math.ceil(response.count)}})
  yield put({type: actionType.HANDLE_COVER_LIST,payload:{coverList:response.data}})
}

export function* rootSaga() {
    yield takeEvery(actionType.LOAD_COVER_LIST, uploadCoverList);
    yield takeEvery(actionType.SEARCH_COVER, searchCover)
}
