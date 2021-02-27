import { useState } from 'react';
import { calculate } from '../logic/calculate';
import '../App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

function App() {
  const [total, setTotal] = useState('0');
  const [operation, setOperation] = useState('');
  const [next, setNext] = useState('');
  // const handleChange = () => setResult('1');
  // const updateDisplay = nValue => {
  //   setResult(nValue);
  // };
  const updateDisplay = bValue => {
    console.log(bValue);
    const nValues = calculate({ total, operation, next }, bValue);
    setTotal(nValues.total);
    setOperation(nValues.operation);
    setNext(nValues.next);
  };

  return (
    <>
      <div className="App">
        <div className="content">
          <h1 className="title-app">Welcome To My Calculator</h1>
          <Display total={total} operation={operation} next={next} />
          <ButtonPanel updateDisplay={updateDisplay} />
        </div>
      </div>
    </>
  );
}

export default App;
