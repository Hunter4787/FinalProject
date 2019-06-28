import React from 'react';
import './App.css';
import Nav from './nav' 
import Admin from './admin'
import Conexion from './connexion'

function App() {
  return (
    <div className="App">
     <Nav />
     <Conexion />
     <Admin/>
    </div>
  );
}

export default App;
