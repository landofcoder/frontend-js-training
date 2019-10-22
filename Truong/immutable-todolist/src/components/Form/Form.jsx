import React,{Component} from 'react';
import Forminputlist from './Forminputlist/Forminputlist';
import Showlist from './Showlist/Showlist';
export class INPUT extends Component {
    render() {
        return (
        <div className="marginbody">
            <Forminputlist />
        </div>
        )
    }
}
export class FORMNOINPUT extends Component {
    constructor(props){
        super(props);
        this.state = {detail: detais};
        this.remove = this.remove.bind(this);
    }
    render() {
        return (
        <div className="marginbody">
            <ul className="list-group">
            <Showlist className="showlist" />
            </ul>
        </div>
        )
    }
}