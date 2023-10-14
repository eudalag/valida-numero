import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { positiveNumberRegex } from './constantes';

function App() {
  const [inputValue, setInputValue] = useState('');
  const handleChangeDemandLimit = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { value } = event.target as HTMLInputElement;
    // Expresión regular para aceptar números enteros o decimales
    if (positiveNumberRegex.test(value)) {
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
