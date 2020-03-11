import React, { Component } from 'react';
import './App.css';
import ButtonGeneric from '../src/assets/components/button';
import Kitchen from './assets/components/kitchen';
import Waiter from './assets/components/waiter';

import { BrowserRouter as Router,Route ,Link } from "react-router-dom";

class App extends Component{
    
  render(){
    
  return <Router> 
    <div className="App">
  
      <header className="header">
          <Link to="/"><ButtonGeneric name ="Mesas"/></Link>
        
          <Link to="/cocina"><ButtonGeneric name ="Cocina"/></Link>


      </header>
   <Route exact path="/" component={Waiter} />      
   <Route exact path="/Cocina" component={Kitchen} />
  
 
  
  </div>
  
  </Router>
  }

}



export default App;
