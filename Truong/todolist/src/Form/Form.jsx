import React,{Component} from 'react';
import Forminputlist from './Forminputlist/Forminputlist';
import Showlist from './Showlist/Showlist';
export var detais = [];
const p = {
  detail: 1,
  value: "Truong PHKT"
}
detais.push(p);
export var cache = {
  detail: 0,
  value: ""
};
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
        console.log("chay Form");
    }
    remove=(event)=>{
        var comparedel = event;
        console.log("Da kiem xoa : " + comparedel+ "  xoa o vi tri :"+ (detais.length-comparedel));
        detais.splice(detais.length- comparedel,1);
        detais.map((i,index)=>{
            i.detail = detais.length -index;
            console.log("index :" +index);
        })
        console.log(detais);
        this.setState({detail: detais});
    }
    render() {
        return (
        <div className="marginbody">
            <ul className="list-group">
            <Showlist remove={this.remove} className="showlist" />
            </ul>
        </div>
        )
    }
}