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
            date: new Date().toDateString(),
            index : 1
        }
    ],
    isloading : true
});

const mainReducer = (state = defaultState, action) => {
    switch (action.type) {
        case types.ADD:
            return state.setIn(['example2'],state.getIn(['example2']).push(Map({name: action.name,date: new Date().toDateString(),index: action.index})));
        case types.isloading:
            return state.setIn(['isloading'],!state.getIn(['isloading']));
        case types.DELETE:
            return state.setIn(['example2'],state.getIn(['example2']).delete(action.index - 1))
        default:
            return state;
    }
};

export default mainReducer;
