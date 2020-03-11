import React, { Component } from 'react';
import './index.css';
import Button from '@material-ui/core/Button';


class ButtonGeneric extends Component{
    
    render(){
      const { classes } = this.props;
      return  <div>
    <Button variant="contained" className={classes.active} onClick={this.props.clickBtn}>{this.props.name}</Button>
      </div>
    }
  }
