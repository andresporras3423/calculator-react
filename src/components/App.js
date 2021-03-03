import React from 'react';
import { calculate } from '../logic/calculate';
import '../App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  render() {
    const { total, next, operation } = this.state;

    this.handleClick = buttonValue => {
      const nValues = calculate({ total, operation, next }, buttonValue);
      this.setState({ total: nValues.total });
      this.setState({ next: nValues.next });
      this.setState({ operation: nValues.operation });
    };
    return (
      <>
        <div className="App">
          <div className="content">
            <h1 className="title-app">Welcome To My Calculator</h1>
            <Display total={total} operation={operation} next={next} />
            <ButtonPanel clickHandler={this.handleClick} />
          </div>
        </div>
      </>
    );
  }
}

export default App;
