import React,{Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
var detais = [];
const p = {
  detail: 1,
  value: "Truong PHKT"
}
detais.push(p);
var templatecache = {
  detail: 0,
  value: ""
};
var cache = {
  detail: 0,
  value: ""
};
class Showlist extends React.Component {
  constructor(props){
    super(props);
    console.log("Run Showlist");
  }
  render() {
    var showlistcache = detais.map(i =>{
      return (
        <li class="list-group-item list-group-item-action">{i.detail}.  {i.value}</li>
      );
    });
    return showlistcache;
  }
}
class Forminputlist extends React.Component {
  constructor(props) {
    super(props);
    console.log("Run Forminput list");
    this.setvalue = this.setvalue.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  };
  setvalue = (event) =>{
    cache = new Object();
    cache.value = event.target.value;
    cache.detail = detais.length + 1;
  }
  onSubmit(event){
    event.preventDefault();
    console.log(cache.value);
    if(cache.value){
      console.log("Add okie");
      this.props.addItem({cache});
    }
    else{
      console.log("NULL");
    }
    this.refs.form.reset();
  }
  render() {
      return (
        <form ref="form" onSubmit={this.onSubmit} className="bgform">
            <div class="input-group input-group-lg setwidth">
              <input onChange={this.setvalue} check="checktome" type="text"  className="input form-control" aria-label="" aria-describedby="inputGroup-sizing-sm"/>
            </div>
        </form>
      )
  }
};
class FORM extends Component {
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
  render() {
    return (
      <div className="marginbody">
        <ul class="list-group">
          <Showlist />
        </ul>
        <div className="spaceinput"></div>
        <Forminputlist addItem = {this.addItem} />
      </div>
    )
  }
}
function App() {
  return (
    <div className="body">
      <div className="spacebody"></div>
      <FORM />
    </div>
  );
}

export default App;
