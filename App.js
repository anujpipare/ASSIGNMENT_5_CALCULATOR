import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    setResult(result + value);
  };

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult('Error');
    }
  };

  const clear = () => {
    setResult('');
  };

  const deleteLast = () => {
    setResult(result.slice(0, -1));
  };

  return (
    <div className="calculator">
      <div className="display">{result || "0"}</div>
      <div className="buttons">
        <button className="button clear" onClick={clear}>AC</button>
        <button className="button" onClick={deleteLast}>DEL</button>
        <button className="button" onClick={() => handleClick('%')}>%</button>
        <button className="button operator" onClick={() => handleClick('/')}>÷</button>
        <button className="button" onClick={() => handleClick('7')}>7</button>
        <button className="button" onClick={() => handleClick('8')}>8</button>
        <button className="button" onClick={() => handleClick('9')}>9</button>
        <button className="button operator" onClick={() => handleClick('*')}>×</button>
        <button className="button" onClick={() => handleClick('4')}>4</button>
        <button className="button" onClick={() => handleClick('5')}>5</button>
        <button className="button" onClick={() => handleClick('6')}>6</button>
        <button className="button operator" onClick={() => handleClick('-')}>−</button>
        <button className="button" onClick={() => handleClick('1')}>1</button>
        <button className="button" onClick={() => handleClick('2')}>2</button>
        <button className="button" onClick={() => handleClick('3')}>3</button>
        <button className="button operator" onClick={() => handleClick('+')}>+</button>
        <button className="button zero" onClick={() => handleClick('0')}>0</button>
        <button className="button" onClick={() => handleClick('.')}>.</button>
        <button className="button equals" onClick={calculate}>=</button>
      </div>
    </div>
  );
};

export default App;
