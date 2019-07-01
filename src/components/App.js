import React from "react";
import "./App.css";
import Header from "";
import Nav from "./nav";
import Searchbar from "./searchbar";
import SignUp from "./signup";
import SignIn from "./signin";
import Admin from "./admin";
import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";
//import Conexion from './connexion'
// import withFirebaseAuth from 'react-with-firebase-auth'
// import * as firebase from 'firebase/app';
// import 'firebase/auth';
// import firebaseConfig from './firebaseConfig';

// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const firebaseAppAuth = firebaseApp.auth();
// const providers = {
//   googleProvider: new firebase.auth.GoogleAuthProvider(),
// };
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Searchbar />
        <Routes />
        <Admin />
        <Header />
      </div>

    </BrowserRouter>
  );
}

export default App;
//withFirebaseAuth({
//   providers,
//   firebaseAppAuth,
// })(App);
