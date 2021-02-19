import './App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

function App() {
  return (
    <div className="App">
      <div className="content">
        <h1>App Component</h1>
        <Display />
        <ButtonPanel />
      </div>
    </div>
  );
}

export default App;
