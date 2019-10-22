import React from 'react';
import List from './List/List';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    Getall: state.getIn(['example2']).toJS()
})
// const mapStateToProps = (state) =>({
//   state : state
// })


const Showlist = ({Getall}) => (
  <List /*remove={todo.name} detail={todo.name} value={todo.date.toGMTString()}*/>
  </List>
)


export default connect(mapStateToProps)
(Showlist);

