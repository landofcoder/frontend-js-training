import React from 'react';
import {connect} from 'react-redux';
import {AddtoList} from '../../../actions/main-action'

const mapDispatchToPropos = (dispatch) =>({
  AddtoList: i => {dispatch(AddtoList(i))}
})
const Forminputlist = ({AddtoList}) => {
  let input;
  return(
  <form className="bgform" onSubmit={
    e => {e.preventDefault();
    AddtoList(input.value);
    input.value = '';
  }}>
    <div class="input-group input-group-lg setwidth">
      <input ref={i => {input = i}} placeholder="Enter value"  check="checktome" type="text"  className="input form-control" aria-label="" aria-describedby="inputGroup-sizing-sm"/>
    </div>
    <div>
      <p></p>
    </div>
  </form>
  );
}
export default connect(
  null,
  mapDispatchToPropos
)(Forminputlist);
