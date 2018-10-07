import React from 'react';
import { 
  BrowserRouter as Router, 
  Route,
  Switch
} from 'react-router-dom'

import Header from './components/Header/Header'
import Home from './components/Home'
import About from './components/About'
import './App.css';

const App = () => (
  <Router>
    <div>
      <Header/>
      <Switch>
        <Route path="/about" component={About} />
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  </Router>
)

export default App;
