import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import Home from './home';
import Add from './add';

function App() {
  return (
    <Router>
        <Switch>
        <Route path="/" exact component={Home}/> 
        <Route path="/add" exact component={Add}/> 
      </Switch>
    </Router>
  );
}

export default App;
