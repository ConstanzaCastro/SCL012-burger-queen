import React, { Component } from 'react'
import db from '../firebase';

class Lunch extends Component{
    constructor(props){
        super(props)
        this.state={
            products: data.Lunch,
            client: "",
            table: "",
            orders: [],
            price: 0
        }
    }

    clickItem=(e)=>{ 

        let products = this.state.orders;
        products.push({
          product: e.product,
          price: e.price
        });

        let currentTotal = this.state.price;
        let sumTotal = e.price;
        let newTotal = currentTotal + sumTotal;
        this.setState({
          price: newTotal
        });
       }

