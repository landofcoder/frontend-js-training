import * as types from '../constants';

export function AddtoList(name){
    console.log("get index in to a function AddtoList");
    console.log(name.index);
    return {
        type: types.ADD,
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