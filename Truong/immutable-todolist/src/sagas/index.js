import { takeEvery } from "redux-saga/effects";
import mainSaga from "./main-saga";
import {ADD_SYNC} from '../constants/index';
function* rootSaga() {
    console.log("call rootSaga");
    yield takeEvery(ADD_SYNC,mainSaga);
    // yield all([
    //     mainSaga(),
    // ]);
}

export default rootSaga;
