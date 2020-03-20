import React from 'react';
import { Link } from "react-router-dom";
import InputClient from "../components/InputClient";

const Waiter = () => {

    return (
       
            <div>
                      <InputClient />
                      <br />
                  <div className="navigation-link">
                  <ul>
                    <li>
                        <Link to="/navigation/waiter/breakfast">Desayuno</Link>
                    </li>
                    <li>
                        <Link to="/navigation/waiter/lunch">Almuerzo</Link>
                    </li> 
                        <Link to="/">Volver</Link>
                </ul>
            </div>
            </div>    
      
    )
}

export default Waiter;