import {createStore} from 'redux';
function setSate(state = true,action){
    switch(action.type){
        case 'off':
            state = false;
            return state;
        case 'on':
            state = true;
            return state;
        default:
            console.log("isloading still is it!!! error syntax#");
            return state;
    }
}
let Stateloading = createStore(setSate);
export default Stateloading