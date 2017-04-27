import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home/Home';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const App = () => (
  <Router>
    <div className="constrain">
      <Route exact path="/" component={Home}/>
    </div>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('app'));