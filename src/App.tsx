import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Nav from './containers/Nav';
import Home from "./routes/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Nav brandName={'Store Contract'} logoSrc={logo} />
        </header>

        <Switch>
          <Route exact path={'/'} component={Home}/>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
