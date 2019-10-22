import React, {Component} from "react";
import connect from "react-redux/es/connect/connect";
import {sumCalc, changeNumberAPassword, changeNumberBPassword,AddtoList} from '../../actions/main-action';
var count = 0 ;
class Sum extends Component {
    componentDidMount() {
        console.log('sum:', this.props.sum);
    }

    constructor(props) {
        super(props);
    }

    onNumberAChange = (e) => {
        this.props.AddtoList(e.target.value);
    };

    onNumberBChange = (e) => {
        this.props.changeNumberBPassword(e.target.value);
    };

    render() {
        console.log("loading sum!!!");
        console.log(this.props.example1.get('numberA'));
        var numberA = this.props.example1.get('numberA');
        var numberB = this.props.example1.get('numberB');
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

const mapStateToProps = state => {
    console.log("state");
    console.log(state.toJS());
    return ({
    example1: state.getIn(['mainReducer', 'example1']),
    sum: state.getIn(['mainReducer', 'example1', 'sum']),
    example2: state.getIn(['mainReducer','example2'])
    })
};
const mapDispatchToProps = dispatch => {
    return {
        sumCalc: () => dispatch(sumCalc()),
        changeNumberAPassword: (payload) => dispatch(changeNumberAPassword(payload)),
        changeNumberBPassword: (payload) => dispatch(changeNumberBPassword(payload)),
        AddtoList: (name) => dispatch(AddtoList(name))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Sum);
