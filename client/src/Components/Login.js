import React from 'react'
import './style/login.css'
import {Route} from "react-router-dom";


function Login() {
    return (
        <div className="container">
            <div className="header">
                <h1>Login</h1>
            </div>
            <div className="main"> 
                <form>
                    <span>
                        <i className="fa fa-user">👤</i>
                        <input type="text" placeholder="Email" name=""></input>
                    </span><br/>
                    <span>
                        <i className="fa fa-lock">🔒</i>
                        <input type="password" placeholder="Password" name=""></input>
                    </span><br/>
                    <button>Login</button>
                </form>

            </div>
        
            
        </div>

    
    )}

export default Login
