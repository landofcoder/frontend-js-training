import React from 'react';
import {connect} from 'react-redux';

const removee = (i) => ({
  type:'delete',
  name: i
})
const mapStateToProps = (state) =>({
  state : state
})
const mapDispatchToProps = (dispatch) =>({
  remove: i => {dispatch(removee(i))}
})

const List = ({state,remove}) => {
  console.log("rerender!!!");
  return (state.map(i=>(
    <li className="liclass list-group-item list-group-item-action"> {i.name}        {i.date.toString()}
      <button onClick={(e)=>{
        e.preventDefault();
        remove(i.name);
      }} type="button" className="close" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </li>
  ))
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);