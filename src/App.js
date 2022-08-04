import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import { auth } from './firebase/init';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, signOut,
  onAuthStateChanged } from "firebase/auth";

function App() {
  const [user, setUser] = useState("")
  const [load, setLoad] = useState(true);

  useEffect(() => { //is actually called many times when re-rendering happens, so its not exactly one time only
    onAuthStateChanged(auth, (user) => {
      setLoad(false)
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
      <h1>{load ? 'loading...' : user.email}</h1>
    </div>
  );
}

export default App;
