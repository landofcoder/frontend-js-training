import {fromJS,Map} from 'immutable';
import * as types from '../constants/index';

const defaultState = fromJS({
    example1: {
        numberA: 0,
        numberB: 0,
        sum: 0
    },
    example2: [
        {
            name: "Truong",
            date: new Date().toDateString()
        }
    ]
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
        case types.ADD:
            return state.setIn(['example2'],state.getIn(['example2']).push(Map({name: action.name,date: new Date().toDateString()})));
        default:
            return state;
    }
};

export default mainReducer;
