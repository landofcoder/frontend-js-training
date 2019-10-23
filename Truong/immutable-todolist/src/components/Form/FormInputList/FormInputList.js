import React from 'react';
import { connect } from 'react-redux';
import { addToListSync } from '../../../actions/main-action'
const mapStateToProps = state => ({
    getLength: state.getIn(['mainReducer', 'example2']).size + 1
})
const mapDispatchToProps = (dispatch) => ({
    addToListSync: i => {
        return dispatch(addToListSync(i))
    }
})
const FromInputList = ({ getLength, addToListSync }) => {
    let input;
    return (
        <form className="bgform" onSubmit={
            e => {
                e.preventDefault();
                addToListSync({
                    name: input.value,
                    index: getLength
                });
                input.value = '';
            }}>
            <div className="Input-group Input-group-lg setwidth">
                <input ref={i => { input = i }} placeholder="Enter value" check="checktome" type="text" className="input form-control" aria-label="" aria-describedby="inputGroup-sizing-sm" />
            </div>
            <div>
                <p></p>
            </div>
        </form>
    );
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FromInputList);
