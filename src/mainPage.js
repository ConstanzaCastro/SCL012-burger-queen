import React from 'react';
import logo from "./assets/image/vurgerkuin.png";
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
        <Link to="assets/views/waiter.js">Mesas</Link>
        <Link to="assets/views/kitchen.js">Cocina</Link>
      </header>
    </div>
    

  );
}

export default Init;