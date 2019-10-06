import React from 'react';
import { BrowserRouter as Router,Route,Link} from 'react-router-dom';
import {INPUT} from './Form/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import {FORMNOINPUT} from './Form/Form';
import { AnimatedSwitch } from 'react-router-transition';
function App() {
  return (
    <div className="body">
        <div className="spacebody"></div>
        <div className="border">
          <Router>
            <Link className="link btn btn-link" to="/menu">List</Link>
            <Link className="link btn btn-link" to="/">Detail</Link>
            <AnimatedSwitch atEnter={{ opacity: 0 }} atLeave={{ opacity: 0 }} atActive={{ opacity: 1 }} className="switch-wrapper">
              <Route exact path="/">
                <INPUT />
              </Route>
              <Route exact path="/menu">
                <FORMNOINPUT />
              </Route>
            </AnimatedSwitch>
          </Router>
        </div>
    </div>
  );
}

export default App;
