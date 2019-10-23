import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeFromList } from '../../../../actions/main-action'

class List extends Component {
  constructor(props) {
    super(props);
  }
  clickDelete = (index) => {
    this.props.removeFromList(index);
  }
  render() {
    return (this.props.state.map((i, index) => (
      <li className="liclass list-group-item list-group-item-action">{index + 1}. {i.get('name')}        {i.get('date')}
        <button onClick={() => this.clickDelete(index)} type="button" className="close" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </li>
    )))
  }
}

const mapStateToProps = (state) => ({
  state: state.getIn(['mainReducer', 'example2']),
})
const mapDispatchToProps = (dispatch) => ({
  removeFromList: (index) => (dispatch(removeFromList(index))),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(List);