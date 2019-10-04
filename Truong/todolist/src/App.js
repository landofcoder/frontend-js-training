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
    this.willdel = this.willdel.bind(this);
  }
  willdel(event){
    
  }
  render() {
    var showlistcache = detais.map(i =>{
      return (
        <li className="list-group-item list-group-item-action">{i.detail}.  {i.value}
          <button onclick={this.willdel} type="button" className="close" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </li>
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
    console.log("Cachedeatil : " +cache.detail);
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
              <input onKeyDown={this.setvalue} check="checktome" type="text"  className="input form-control" aria-label="" aria-describedby="inputGroup-sizing-sm"/>
            </div>
        </form>
      )
  }
};
class FORM extends Component {
  constructor(props){
    super(props);
    this.state = {detail: detais}
    console.log(this.addItem.bind(this));
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
  remove(event){
    var comparedel = event;
    console.log(event);
    detais.splice(comparedel.detail,1);
    this.setState({detail: detais});
  }
  render() {
    return (
      <div className="marginbody">
        <ul class="list-group">
          <Showlist remove={this.remove} />
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
