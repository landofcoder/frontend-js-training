import * as types from '../constants';

export const AddtoList = (name) =>
({
    type: types.ADD,
    name: name.name,
    index: name.index
})
export function AddtoList_SYNC(name){
    return {
        type: types.ADD_SYNC,
        name: name.name,
        index: name.index
    }
}
export const RemovefromList = (index) => ({
    type: types.DELETE,
    index
})
export const changeloading = () => ({
    type: types.isloading
})