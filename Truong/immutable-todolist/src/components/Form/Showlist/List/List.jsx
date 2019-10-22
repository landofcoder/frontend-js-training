import React from 'react';
import {connect} from 'react-redux';
import {RemovefromList} from '../../../../actions/main-action'
const mapStateToProps = (state) =>({
  state : state.getIn(['mainReducer','example2'])
})
const mapDispatchToProps = (dispatch) =>({
  RemovefromList: (i) => (dispatch(RemovefromList(i)))
})

const List = ({state,RemovefromList}) => {
  return (state.toJS().map(i=>(
    <li className="liclass list-group-item list-group-item-action">{i.index}. {i.name}        {i.date}
      <button onClick={(e)=>{
        e.preventDefault();
        RemovefromList(i.index);
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