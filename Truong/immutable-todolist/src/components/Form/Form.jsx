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