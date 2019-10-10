import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Storeloading from './store/Stateloading';
import {Provider} from 'react-redux'
import {render} from 'react-dom';
import Main from './Main';
import Storelist from './store/Storelist';

const Checkloading = ()=> ReactDOM.render(<App statusloading={Storeloading.getState()} offloading = {()=>Storeloading.dispatch({type: 'off'})} />, document.getElementById('root'));
Checkloading();
Storeloading.subscribe(Checkloading);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
