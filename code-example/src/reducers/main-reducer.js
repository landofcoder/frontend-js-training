import {fromJS} from "immutable";


const defaultState = fromJS({
    sum: 0
});

const mainReducer = (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default mainReducer;
