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
    constructor(props){
        super(props);
        this.state = {detail: detais,cacheadd: ""}
        this.addItem = this.addItem.bind(this);
        console.log("chay Form");
    }
    addItem(detaill){
        if(detaill.cache.value){
        detais.unshift(detaill.cache);
        }
        else
        {
        console.log("khong the them ??");
        }
        this.setState({detail: detais});
    }
    remove = (event) =>{
        var comparedel = event;
        console.log("Da kiem xoa : " + comparedel);
        detais.splice(detais.length- comparedel,1);
        for(var i = 0 ; i < detais.length; i ++)
        {
        console.log(detais[i].detail);
        }
        this.setState({detail: detais});
    }
    render() {
        return (
        <div className="marginbody">
            <Forminputlist addItem = {this.addItem} />
        </div>
        )
    }
}
export class FORMNOINPUT extends Component {
    constructor(props){
        super(props);
        this.state = {detail: detais}
        this.addItem = this.addItem.bind(this);
        console.log("chay Form");
    }
    addItem(detaill){
        if(detaill.cache.value){
        detais.unshift(detaill.cache);
        }
        else
        {
        console.log("khong the them ??");
        }
        this.setState({detail: detais});
    }
    remove = (event) =>{
        var comparedel = event;
        console.log("Da kiem xoa : " + comparedel);
        detais.splice(detais.length- comparedel,1);
        for(var i = 0 ; i < detais.length; i ++)
        {
        console.log(detais[i].detail);
        }
        this.setState({detail: detais});
    }
    render() {
        return (
        <div className="marginbody">
            <ul className="list-group">
            <Showlist remove={this.remove} className="showlist" remove={this.remove} />
            </ul>
        </div>
        )
    }
}
export default class FORM extends Component {
    constructor(props){
        super(props);
        this.state = {detail: detais}
        this.addItem = this.addItem.bind(this);
        console.log("chay Form");
    }
    addItem(detaill){
        if(detaill.cache.value){
        detais.unshift(detaill.cache);
        }
        else
        {
        console.log("khong the them ??");
        }
        this.setState({detail: detais});
    }
    remove = (event) =>{
        var comparedel = event;
        console.log("Da kiem xoa : " + comparedel);
        detais.splice(detais.length- comparedel,1);
        for(var i = 0 ; i < detais.length; i ++)
        {
        console.log(detais[i].detail);
        }
        this.setState({detail: detais});
    }
    render() {
        return (
        <div className="marginbody">
            <ul className="list-group">
            <Showlist remove={this.remove} className="showlist" remove={this.remove} />
            </ul>
            <div className="spaceinput"></div>
            <Forminputlist addItem = {this.addItem} />
        </div>
        )
    }
}