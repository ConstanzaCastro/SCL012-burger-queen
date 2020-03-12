import React, {Component} from 'react';
import logo from '../imge/vurgerkuin.png'
import { Link } from "react-router-dom";


class Logo extends Component{
   
    
    render(){
        return <div className="logo-container">
        <button> <Link to="/"><img src={logo} alt="logo"/></Link></button>
        </div>
    }
        
}



export default Logo;