import { all } from "redux-saga/effects";
import mainSaga from "./main-saga";

function* rootSaga() {
    yield all([
        mainSaga(),
    ]);
}

export default rootSaga;
