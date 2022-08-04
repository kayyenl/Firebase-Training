import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import { auth } from './firebase/init';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, signOut,
  onAuthStateChanged } from "firebase/auth";

function App() {
  const [user, setUser] = useState("")

  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user)
      if (user) {
        setUser(user)
      }
    })
  }, [])

  function register() {
    console.log('register')
    createUserWithEmailAndPassword(auth, 'bob@cheese.com', 'cheesewheel')
      .then(({ user }) => {
        console.log(user)
      })
      .catch((error) => {
        console.log(error.message)
      })
  }

  function login() {
    console.log('login')
    signInWithEmailAndPassword(auth, 'bob@cheese.com', 'cheesewheel')
      .then(({ user }) => {
        console.log(user)
        setUser(user)
      })
      .catch((error) => {
        console.log(error.message)
      })
  }

  function logout() {
    signOut(auth).then(() => {
      console.log('signout success!')
    }).catch(() => {
      console.log('signout failure...')
    })
    setUser("")
  }
  return (
    <div className="App">
      <button onClick={() => register()}>
        Register Now
      </button>
      <button onClick={() => login()}>
        Login
      </button>
      <button onClick={() => logout()}>
        Logout
      </button>
      <br />
      <h1>{user.email}</h1>
    </div>
  );
}

export default App;
