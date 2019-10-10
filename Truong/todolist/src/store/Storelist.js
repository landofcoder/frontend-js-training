import {createStore} from 'redux';
var objectlist = [{
  name: "Truong",
  date: new Date(),
  detail: 1
}];
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
      state.unshift(K);
      return state;
    case 'delete':
      let pos;
      state.find((value,index)=>{
        if(value.name == action.name){
          pos = index;
        }
      })
      console.log("delete");
      console.log("name" + action.name);
      console.log(pos);
      if(pos || pos == 0 )
        state.splice(pos,1);
      return state;
    default:
      console.log("something when wrong with case state");
      return state;
  }
};
let Storelist = createStore(list);
export default Storelist;