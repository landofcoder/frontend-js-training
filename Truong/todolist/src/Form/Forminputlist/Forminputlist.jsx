import React from 'react';
import {connect} from 'react-redux';

const addparameter = (i) => ({
  type: 'create',
  createName: i
})
const mapDispatchToPropos = (dispatch) =>({
  add: i => {dispatch(addparameter(i))}
})
const Forminputlist = ({add}) => {
  let input;
  return(
  <form className="bgform" onSubmit={
    e => {e.preventDefault();
    add(input.value);
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
