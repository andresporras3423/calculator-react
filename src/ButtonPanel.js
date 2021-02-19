import Button from './Button';
// import useState from './react';

const groups = [
  ['AC', '+/-', '%', '÷'],
  ['7', '8', '9', 'x'],
  ['4', '5', '6', '-'],
  ['1', '2', '3', '+'],
  ['0', '.', '=']];

function ButtonPanel() {
  return (
    <div>
      {
          groups.map(group => (
            <div key={Math.random() * 10}>
              {
                  group.map(btn => (
                    <Button name={btn} key={Math.random * 10} />
                  ))
              }
            </div>
          ))
      }
    </div>
  );
}
export default ButtonPanel;
