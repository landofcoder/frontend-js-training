import React from 'react';
import {connect} from 'react-redux';
import {AddtoList_SYNC} from '../../../actions/main-action'
const mapStateToProps = state =>({
    getlength: state.getIn(['mainReducer','example2']).size+1
})
const mapDispatchToPropos = (dispatch) =>({
  AddtoList_SYNC: i => (
    dispatch(AddtoList_SYNC(i)))
})
const Forminputlist = ({getlength,AddtoList_SYNC}) => {
    let input;
    return(
    <form className="bgform" onSubmit={
        e => {e.preventDefault();
        AddtoList_SYNC({name :input.value,
            index: getlength
        });
        input.value = '';
    }}>
        <div className="input-group input-group-lg setwidth">
        <input ref={i => {input = i}} placeholder="Enter value"  check="checktome" type="text"  className="input form-control" aria-label="" aria-describedby="inputGroup-sizing-sm"/>
        </div>
        <div>
        <p></p>
        </div>
    </form>
    );
}
export default connect(
  mapStateToProps,
  mapDispatchToPropos
)(Forminputlist);
