import React from 'react';
import './App.css';
import Init from './mainPage';
import Lunch from './assets/components/lunch';
import Breakfast from './assets/components/breakfast';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Kitchen from './assets/views/kitchen';



function App() {
  return (
    <Router>
      <Route exact path="/" component={ Init } />
        <Route path="/Lunch" component={ Lunch } />
        <Route path="/Breakfast" component={ Breakfast } />
        <Route path="/Kitchen" component={ Kitchen } />    
    </Router>
  );
}

export default App;