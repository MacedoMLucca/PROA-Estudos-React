import ShortArm from './IMG/ShortArmStudios2.png';
import './App.css';
import React from 'react';

function App(props) {
  
  return (
  
    <div className="App">
      <header className="App-header">
        <h1> <span className="title">ShortArm</span> Studios <span className="direitos">&copy;</span> </h1>
          <img src={ShortArm} className="App-logo" alt="logo" />
        <p>{props.pais}</p>
        <p>{props.nome}</p>
      </header>
    </div>
  );
}

export default App;



