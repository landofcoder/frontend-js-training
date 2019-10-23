import { delay, put } from 'redux-saga/effects';
import { addToList } from '../actions/main-action';
function* mainSaga(action) {

    yield delay(5000)
    yield put(addToList(action));

}
export default mainSaga;
