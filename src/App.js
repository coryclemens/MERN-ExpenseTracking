import React from 'react';
import { Dash } from './Dash'
import { AddOrder } from './AddOrder'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/Navbar';

function App() {
  return (
    <>
      <React.Fragment>
        <NavigationBar />
        <Router>
          <Switch>
            <Route exact path="/" component={Dash} />
            <Route path="/addorder" component={AddOrder} />
            <Route component={Dash} />
          </Switch>
        </Router>
      </React.Fragment>
    </>
  );
}

export default App;
