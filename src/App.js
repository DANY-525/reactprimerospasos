import React from 'react';
import logo from './logo.svg';
import './App.css';
import Logica from './Logica';

function App() {

  const sarHello = () => {

    console.log("hello here");
  } 
  return (
    <div className="app">

    <Logica name ="Dev Ed" />
     <Logica name ="jhon snow" />
     <Logica name ="daniel Saavedra" />
    </div>
  );
}

export default App;
