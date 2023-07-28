import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

// ¡Componente vulnerable!
function VulnerableComponent(props) {
  return <div dangerouslySetInnerHTML={{ __html: props.userInput }} />;
}

function App() {
  const [userInput, setUserInput] = useState('');

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bienvenidos a nuestra Prueba de Concepto de DevSecOps con React y GitHub Actions! Para Universidad Areandina
        </p>
        <a
          className="App-link"
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visita nuestro repositorio en GitHub
        </a>
        <input type="text" value={userInput} onChange={handleInputChange} />
        <VulnerableComponent userInput={userInput} />
      </header>
    </div>
  );
}

export default App;
