import { useState } from 'react';
import '../App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

function App() {
  const [result, setResult] = useState('0');
  const handleChange = () => setResult('1');
  const updateDisplay = nValue => {
    setResult(nValue);
  };

  return (
    <>
      <div className="App">
        <div className="content">
          <h1 className="title-app">Welcome To My Calculator</h1>
          <button type="submit" onClick={handleChange}>click to increase display</button>
          <Display result={result} />
          <ButtonPanel updateDisplay={updateDisplay} />
        </div>
      </div>
    </>
  );
}

export default App;
