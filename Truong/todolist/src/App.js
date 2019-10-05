import React from 'react';
import { BrowserRouter as Router,Route,Link} from 'react-router-dom';
import {INPUT} from './Form/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import {FORMNOINPUT} from './Form/Form';
function App() {
  return (
    <div className="body">
        <div className="spacebody"></div>
        <div className="border">
          <Router>
            <Link className="link btn btn-link" to="/menu">List</Link>
            <Link className="link btn btn-link" to="/">Detail</Link>
            <Route exact path="/">
              <INPUT />
            </Route>
            <Route exact path="/menu">
              <FORMNOINPUT />
            </Route>
          </Router>
        </div>
    </div>
  );
}

export default App;
