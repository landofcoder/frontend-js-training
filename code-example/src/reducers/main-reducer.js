import {fromJS} from 'immutable';
import * as types from '../constants/index';

const defaultState = fromJS({
    example1: {
        numberA: 0,
        numberB: 0,
        sum: 0
    }
});

const mainReducer = (state = defaultState, action) => {
    switch (action.type) {
        case types.CHANGE_NUMBER_A_PASSWORD:
            return state.setIn(['example1', 'numberA'], parseInt(action.payload));
        case types.CHANGE_NUMBER_B_PASSWORD:
            return state.setIn(['example1', 'numberB'], parseInt(action.payload));
        case types.SUM_CALC:
            const numberA = state.getIn(['example1', 'numberA']);
            const numberB = state.getIn(['example1', 'numberB']);
            return state.setIn(['example1', 'sum'], numberA + numberB);
        default:
            return state;
    }
};

export default mainReducer;
