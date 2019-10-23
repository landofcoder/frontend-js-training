import {delay,put} from 'redux-saga/effects';
import {AddtoList} from '../actions/main-action';
function* mainSaga(action) {
    console.log("main Saga");
    console.log(action);
    yield delay(5000)
    yield put(AddtoList(action));
}
export default mainSaga;
