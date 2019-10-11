import {createStore} from 'redux';
var objectlist = [{
  name: "Truong",
  date: new Date(),
  detail: 1
}];
function arrayRemove(arr, value) {

   return arr.filter(function(ele){
       return ele.name != value;
   });

}
function list(state = objectlist,action){
  switch(action.type){
    case 'create':
      let K;
      K = {
        name: action.createName,
        date: new Date(),
        detail: state.length + 1
      }
      state.find((value)=>{
        if(value.name ===action.createName)
          return state;
      })

      // solve same name
      return [
        ...state,
        K
      ]
    case 'delete':
      let pos;
      state.find((value,index)=>{
        if(value.name == action.name){
          pos = index;
        }
      })
      console.log("delete");
      console.log("name" + action.name);
      var S = undefined;
      let G = state.splice(pos,1);
      console.log("g: ");
      console.log(G);
      console.log("state");
      console.log(state);
      return arrayRemove(state,action.name);
    default:
      console.log("something when wrong with case state");
      return state;
  }
};
const Storelist = createStore(list);
export default Storelist;