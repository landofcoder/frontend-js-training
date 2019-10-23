import { fromJS, Map } from 'immutable';
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
            //index: 1
        }
    ],
    isLoading: true,
});

const mainReducer = (state = defaultState, action) => {
    switch (action.type) {
        case types.add:
            return state.setIn(['example2'], state.getIn(['example2']).push(fromJS({ name: action.name, date: new Date().toDateString()/*, index: action.index */ })));
        case types.isLoading:
            return state.setIn(['isLoading'], !state.getIn(['isLoading']));
        case types.deleteList:
            return state.setIn(['example2'], state.getIn(['example2']).delete(action.index));
        default:
            return state;
    }
};

export default mainReducer;
