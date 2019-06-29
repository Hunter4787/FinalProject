import React from 'react';
import './App.css';
import Nav from './nav' 
import Searchbar from './searchbar' 
import SignUp from './signup' 
import SignIn from './signin' 
import Admin from './admin'
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
    <div className="App">
     <Nav/>
     <Searchbar/>
     <SignUp/>
     <SignIn/>
     <Admin/>
    
    </div>
  );
}

 export default App
 //withFirebaseAuth({
//   providers,
//   firebaseAppAuth,
// })(App);
