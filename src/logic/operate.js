import Big from 'big.js';

export function operate(total, next, operation) {
  const one = Big(total);
  const two = Big(next);
  if (operation === '+') return one.plus(two);
  if (operation === '-') return one.minus(two);
  if (operation === 'x') return one.times(two);
  if (operation === '÷') {
    if (next === '0.0') return 'Error';
    return one.div(two);
  }
  if (operation === '%') return one.mod(two);
  return null;
}

export default operate;
