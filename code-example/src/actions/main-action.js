import * as types from '../constants';

export function sumCalc() {
    return {
        type: types.SUM_CALC
    }
}

export function changeNumberAPassword(payload) {
    return {
        type: types.CHANGE_NUMBER_A_PASSWORD,
        payload
    }
}

export function changeNumberBPassword(payload) {
    return {
        type: types.CHANGE_NUMBER_B_PASSWORD,
        payload
    }
}
