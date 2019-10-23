import {takeEvery, put} from "redux-saga/effects";
import * as types from '../constants/index';
import {checkDiscountProcessService,} from './service';

function* getApiList() {
    const payload = {testParam: 1};
    const result = yield call(checkDiscountProcessService, payload);
    console.log('result:', result);
    // push data to reducer
    yield put({type: types.RECEIVED_DATA_LIST, result});
}

function* mainSaga() {
    yield takeEvery(types.GET_API_LIST, getApiList);
}

export default mainSaga;
