import React, { Component } from "react";

class InputClient extends Component {
    render() {
      return <div className="input-container">
    <div>
      <label from="client" >Cliente </label>
      <input type="text" id="client" onChange={this.props.change} />
      </div>
    <div>
      <label from="table">N° de Mesa </label>
      <input type="number" id="table"  onChange={this.props.change}/> </div>
      </div>
    }
  }
  
  export default InputClient;