import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToListSync } from '../../../actions/main-action'
class FromInputList extends Component {
    constructor(props) {
        super(props);
        this.submitEvent.bind(this);
        this.getInputValue.bind(this);
    }
    submitEvent = (event) => {
        event.preventDefault();
        this.props.addToListSync({
            name: this.input.value,
            //index: this.props.getLength
        });
        this.input.value = '';
    }
    getInputValue = (event) => {
        this.input = event;
    }
    render() {
        return (
            <form className="bgform" onSubmit={this.submitEvent}>
                <div className="input-group input-group-lg setwidth">
                    <input ref={this.getInputValue} placeholder="Enter value" check="checktome" type="text" className="input form-control" aria-label="" aria-describedby="inputGroup-sizing-sm" />
                </div>
                <div>
                    <p></p>
                </div>
            </form>
        );
    }
}
const mapDispatchToProps = (dispatch) => ({
    addToListSync: i => {
        return dispatch(addToListSync(i));
    }
})
export default connect(
    null,
    mapDispatchToProps
)(FromInputList);
