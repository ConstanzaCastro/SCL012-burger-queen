import React, { Component } from 'react';
import { Link } from "react-router-dom";

class InputClient extends Component {

    state = {
        value:"", 
    }

    render () {
        return (
            <div className="input-client">
            <p>Cliente</p>
            <input onChange={e => this.setState({value: e.target.value})}
            value={this.state.value} />
            <br />
            {this.state.value}
            <br />
            </div>
        )
    }
}

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