import React, { Component } from "react";
import db from "../../firebase";
import data from "../../data.json";
import InputClient from "../components/InputClient";
import "../../index.css";
import Menu from "../components/menu";
import Logo from "../image/vurgerkuin.png";
import Navigation from "../components/navigation";


class Lunch extends Component {

    constructor(props){
        super(props)
        this.state={
            products: data.Lunch,
            client: "",
            table: "",
            orders: [],
            price: 0

        };
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
       };

       removeItem = (index, e) => {
        let itemDelete = this.state.orders;
        
        this.setState({
          orders: itemDelete.filter((itemDelete, i) => {
            return i !== index
          })
        });

        let currentTotal = this.state.price;
        let minusTotal = e.price;
        let newTotal = currentTotal - minusTotal;
        this.setState({
         price: newTotal
        });
       };

        handleChange=(e)=>{
          this.setState({
            [e.id]:e.value
          });
        };

        sendKitchen=()=>{
            
            let init = new Date ()
            let timeInit = init.getHours() + ":" + init.getMinutes();   

            db.collection("orders").add({
                  mesa: this.state.table,
                  cliente: this.state.client,
                  estado: "pendiente",
                  orden: this.state.orders,
                  total: this.state.price,
                  inicio: timeInit,
                  termino: ""
              })
                  .then(function (docRef) {
                      console.log("Document successfully written!", docRef.id);
                  })
                  .catch(function (error) {
                      console.error("Error writing document: ", error);
                  });
          
              };

              render(){
                return(
                   <div className="container-universal">
                       <div className="logo-detail">
                       <Logo/>
                       {/*detalle pedido*/}
                        <InputClient change={(e)=> this.handleChange(e.target)}/>
                       <div className="table-detail">
                        <table>
                         <thead>
                         <tr>
                        <td>Producto</td>
                        <td>Precio</td>
                         </tr> 
                         </thead>
                         <tbody>
                        {this.state.orders.map((e, index)=>
                         <tr key ={index}>
                        <td>{e.product}</td>
                        <td>{e.price}</td>
                        <td><button onClick={() =>this.removeItem(index, e)}>Borrar</button></td>
                        </tr>
                         )}
                         </tbody>
                        <tfoot>
                        <tr>
                        <td>Total:</td>
                         <td>${this.state.price}</td>
                         </tr>
                        </tfoot>
                       </table>
                        </div>
                        <div className="sendingkitchen">
                        <button  onClick={()=>this.sendKitchen()}>Enviar</button>
                       </div>
                       </div>
        
                       <div className="nav-btn">
                       <Navigation/>
                        {this.state.data.map((e)=>
                        <Menu 
                        clickItem = {this.clickItem}
                        key = {e.id}
                        infoproduct = {e} />
                        )}
                       </div>
                      
                        </div>
                )
            }
        }
    export default Lunch;
