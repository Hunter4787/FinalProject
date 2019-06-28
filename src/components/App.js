import React from 'react';
import './App.css';
import Nav from './nav' 
import Drop from './drop' 
import Butt from './test'
import Admin from './admin'
import SignUp from './signup'
import SignIn from './signin' 
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
     <Nav />
     <Drop />
     <Butt/>
     <SignUp />
     <SignIn />
     <Admin/>
    </div>
  );
}

export default App;