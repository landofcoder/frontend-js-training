import React from 'react';
import { connect } from 'react-redux';
import { removeFromList } from '../../../../actions/main-action'
const mapStateToProps = (state) => ({
  state: state.getIn(['mainReducer', 'example2'])
})
const mapDispatchToProps = (dispatch) => ({
  removeFromList: (i) => (dispatch(removeFromList(i)))
})

const List = ({ state, removeFromList }) => {
  return (state.toJS().map(i => (
    <li className="liclass list-group-item list-group-item-action">{i.index}. {i.name}        {i.date}
      <button onClick={(e) => {
        e.preventDefault();
        removeFromList(i.index);
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