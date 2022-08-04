import React, { useState, useEffect } from "react";
import { ReactDOM } from "react-dom/client";
import { auth } from './firebase/init';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, signOut,
  onAuthStateChanged } from "firebase/auth";

const Nav = () => {
    const [isLogin, setLogin] = useState(false)
    const [firstChar, setFirstChar] = useState("")

    function register() {
        console.log('register')
    }
    return (
        <div className="central">
            {!isLogin ?
                <div>
                    <button onClick={() => register()}>Register</button> 
                    <button onClick={() => login()}>Login</button> 
                </div> : 
                <div className="show__char">
                    {firstChar} 
                </div>
            }
        </div>
    );
}

export default Nav;
