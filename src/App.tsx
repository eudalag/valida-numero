import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const handleChangeDemandLimit = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { value } = event.target as HTMLInputElement;
    // Expresión regular para aceptar números enteros o decimales
    if (/^[+]?\d*\.?\d+$/.test(value)) {
      setInputValue(value);
      console.log("permite");
    } else {
      console.log("no permite");
    }
  };
  return (
    <div className="App">
      <input
        id="percentage-edit"
        data-testid="percentage-edit"
        value={inputValue}
        onChange={(e) => handleChangeDemandLimit(e)}
      />
    </div>
  );
}

export default App;
