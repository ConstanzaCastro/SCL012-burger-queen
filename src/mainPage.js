import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from "react-router-dom";

    
const Init=()=> {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
           <code>Vurger Kuin</code> 
        </p>
        <Link to="assets/components/login.js">Log In</Link>
      </header>
    </div>
    

  );
}

export default Init;