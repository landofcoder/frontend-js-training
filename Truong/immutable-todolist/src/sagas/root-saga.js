import { takeEvery, all } from "redux-saga/effects";
import mainSaga from "./main-saga";
import { addSync } from '../constants/index';
function* rootSaga() {
    yield all([
        takeEvery(addSync, mainSaga)
    ]);
}

export default rootSaga;
