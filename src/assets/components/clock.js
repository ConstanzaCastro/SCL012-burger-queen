import React, { Component } from 'react';

class Clock extends Component {
    constructor(){
        super()
        /**fecha actual */
        this.state={
            date: new Date()
        }
    }
    componentDidMount() {
        clearInterval(this.timerID);
        this.timerID = setInterval(
          () => this.tick(),
         1000
        );
      }
      tick() {
        this.setState({
          date: new Date()
        });
      }
    render(){
  /**toLocaleTimeString traduce el estado */
   return(
        <div className="clock-container">
    <h1>{this.state.date.toLocaleTimeString()}</h1>
        </div>
    )
    }
   
    
}
export default Clock;