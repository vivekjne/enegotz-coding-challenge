import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Make from "./Containers/Make"
import Model from "./Containers/Model"
import ModelDetail from "./Containers/ModelDetail"

import { Provider } from 'react-redux';
import store from './store';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <nav id="navbar">
        <h3>ENEGOTZ CODING CHALLENGE</h3>
      </nav>
    <Router>
      <div>
        <Route path="/" exact component={Make} />
        <Route path="/model/:id" component={Model} />
        <Route path="/model-detail/:id" component={ModelDetail} />
      </div>
    </Router>
    </Provider>
  );
}

export default App;
