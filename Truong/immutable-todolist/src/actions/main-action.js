import * as types from '../constants';

export const addToList = (action) =>
    ({
        type: types.add,
        name: action.name,
        index: action.index
    })
export const addToListSync = (action) => {
    return {
        type: types.addSync,
        name: action.name,
        //index: action.index
    }
}
export const removeFromList = (index) => ({
    type: types.deleteList,
    index
})
export const changeLoading = () => ({
    type: types.isLoading
})