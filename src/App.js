import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
//import login from './assets/components/login';
import Init from './mainPage';
import Login from './assets/components/login';



function App() {
  return (
   
 <div>
      
      <Router>
      <alt src={logo}/>
      <Route exact path="/jsh" component={ Init } />
      <Route path="/" component={ Login } />
    </Router>
    </div>
   

  );
}

export default App;
