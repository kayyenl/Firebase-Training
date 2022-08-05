import React, { useState, useEffect } from "react";
import { ReactDOM } from "react-dom/client";
import { auth, db } from './firebase/init';
import { collection, addDoc } from 'firebase/firestore';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, signOut,
  onAuthStateChanged } from "firebase/auth";

const Nav = () => {
    const [isLogin, setLogin] = useState(false)
    const [load, setLoad] = useState(true)
    const [firstChar, setFirstChar] = useState("")
    const [user, setUser] = useState("");

    function createPost() {
        const post = {
            title: "How millenials are getting jobs",
            description: "Cue the entrance of the brand new 21st centry workforce!"
        };
        addDoc(collection(db, 'posts'), post)
    }

    useEffect(() => { //is actually called many times when re-rendering happens, so its not exactly one time only
        onAuthStateChanged(auth, (user) => {
            setLoad(false)
            console.log(user)
          if (user) {
            setUser(user)
            setLogin(true)
          }
        })
      }, [])

    function register() {
    console.log('register')
    setLoad(true)
    createUserWithEmailAndPassword(auth, 'bob@cheese.com', 'cheesewheel')
        .then(({ user }) => {
            console.log(user)
            setLoad(false)
        })
        .catch((error) => {
            console.log(error.message + 'yes')
            setLoad(false)
        })
    }

    function login() {
    console.log('login')
    setLoad(true)
    signInWithEmailAndPassword(auth, 'bob@cheese.com', 'cheesewheel')
        .then(({ user }) => {
            console.log(user)
            setUser(user)
            setLogin(true)
            setLoad(false)
        })
        .catch((error) => {
            console.log(error.message)
        })
    }

    function logout() {
        setLoad(true)
        signOut(auth).then(() => {
          console.log('signout success!')
          setLoad(false)
        }).catch(() => {
          console.log('signout failure...')
        })
        setUser("")
        setLogin(false)
      }

    return (
        <div className="central">
            {
                load ? 
                <div className="loading__state"></div> : <>
                {!isLogin ?
                    <div>
                        <button onClick={() => register()}>Register</button> 
                        <button onClick={() => login()}>Login</button> 
                    </div> : 
                    <button className="show__char" onClick={() => logout()}>
                        {user.email[0]} 
                    </button>
                } </>
            }
        </div>
    );
}

export default Nav;
