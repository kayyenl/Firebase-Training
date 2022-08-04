import logo from './logo.svg';
import './App.css';
import { auth } from './firebase/init';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword } from "firebase/auth";

function App() {
  function register() {
    console.log('register')
    createUserWithEmailAndPassword(auth, 'bob@cheese.com', 'cheesewheel')
      .then((user) => {
        console.log(user, 'yes')
      })
      .catch((error) => {
        console.log(error, 'no')
      })
  }

  function login() {
    console.log('login')
    signInWithEmailAndPassword(auth, 'bob@cheese.com', 'cheesewheel')
      .then((user) => {
        console.log(user, 'yes')
      })
      .catch((error) => {
        console.log(error, 'no')
      })
  }
  return (
    <div className="App">
      <button onClick={() => register()}>
        Register Now
      </button>
      <button onClick={() => login()}>
        Login
      </button>
    </div>
  );
}

export default App;
