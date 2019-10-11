import React, {Component} from "react";
import connect from "react-redux/es/connect/connect";
import {sumCalc, changeNumberAPassword, changeNumberBPassword} from '../../actions/main-action';

class Sum extends Component {
    componentDidMount() {
        console.log('sum:', this.props.sum);
    }

    constructor(props) {
        super(props);
    }

    onNumberAChange = (e) => {
        this.props.changeNumberAPassword(e.target.value);
    };

    onNumberBChange = (e) => {
        this.props.changeNumberBPassword(e.target.value);
    };

    render() {
        const numberA = this.props.example1.get('numberA');
        const numberB = this.props.example1.get('numberB');
        const {sum} = this.props;

        return (
            <div>
                <h4>calculation with manual clicked</h4>
                <input onChange={this.onNumberAChange} value={numberA}/>
                <input onChange={this.onNumberBChange} value={numberB}/>
                <button onClick={this.props.sumCalc}>SUM</button>
                <br/>
                <p>
                    sum: {sum}
                </p>
                <hr/>
                <h4>calculation without clicked</h4>
                <input onChange={this.onNumberAChange} value={numberA}/>
                <input onChange={this.onNumberBChange} value={numberB}/>
                <button onClick={this.props.sumCalc}>SUM</button>
                <br/>
                <p>
                    sum: {numberA + numberB}
                </p>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    example1: state.getIn(['mainReducer', 'example1']),
    sum: state.getIn(['mainReducer', 'example1', 'sum']),
});
const mapDispatchToProps = dispatch => {
    return {
        sumCalc: () => dispatch(sumCalc()),
        changeNumberAPassword: (payload) => dispatch(changeNumberAPassword(payload)),
        changeNumberBPassword: (payload) => dispatch(changeNumberBPassword(payload))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Sum);
