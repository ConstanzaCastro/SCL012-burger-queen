import React, { Component } from 'react'
import db from '../firebase';

class Lunch extends Component{
    constructor(props){
        super(props)
        this.state={
            products: products.Lunch,
            client: "",
            table: "",
            orders: [],
            price: 0
        }
    }

