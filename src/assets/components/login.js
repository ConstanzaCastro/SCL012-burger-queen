import React, { useState } from 'react';
import '../../App.css';
import "firebase/auth";
import { useFirebaseApp, useUser } from "reactfire";

 const Login = (props) => {
    const [ email, setEmail ] = useState("");
    const [ password, setPassword] = useState("");

    const firebase = useFirebaseApp();

    const user = useUser();

    const login=() => {
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
            let errorCode = error.code;
            console.log(errorCode)
            let errorMessage = error.message;
            console.log(errorMessage)
        });   
    }
    
    /*const logOut= () => {
        firebase.auth().signOut().then(function() {
            // Sign-out successful, you are out.
          }).catch(function(error) {
            // Something happen. An error happened.
          });
    }*/

    return (
        <div>
            {
                !user && 

            <div className="navbar-login">
            <label htmlFor="email">Correo</label>
            <input type="email" id="email" onChange={ (event) => setEmail(event.target.value)}/>
            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password" onChange={ (event) => setPassword(event.target.value)}/> 
            <button onClick={login}>Iniciar Sesión </button>
            </div>
            }
            { /* user &&
                <React.Fragment>
                <Navigation/><button id="btn-logOut" onClick={logOut}>Cerrar sesión</button>
                </React.Fragment>
            */}
        </div>
    )
    
}
export default Login 