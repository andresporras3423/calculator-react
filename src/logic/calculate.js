import { operate } from './operate';

export function calculate(nCalcData, buttonName) {
  const calcData = nCalcData;
  if (calcData.total === 'Error') calcData.total = '0';
  if (buttonName === '=' && calcData.next !== '') {
    calcData.total = operate(calcData.total, calcData.next, calcData.operation);
    calcData.operation = '';
    calcData.next = '';
  } else if (buttonName === 'AC') {
    calcData.total = '0';
    calcData.operation = '';
    calcData.next = '';
  } else if (buttonName === '+/-') {
    if (calcData.operation === '') calcData.total = `${calcData.total * -1}`;
    else if (calcData.next !== '') calcData.next = `${calcData.next * -1}`;
  } else if (buttonName === '.') {
    if (calcData.operation === '') {
      if (calcData.total.match(/\./) === null) calcData.total = `${calcData.total}.0`;
    } else if (calcData.next === '') calcData.next = '0.0';
    else if (calcData.next.match(/\./) === null) calcData.next = `${calcData.next}.0`;
  } else if (buttonName.match(/[1-9]/) !== null) {
    if (calcData.operation === '') {
      if (calcData.total === '0' || calcData.total.match(/\.[0]+$/)) {
        calcData.total = calcData.total.slice(0, calcData.total.length - 1) + buttonName;
      } else calcData.total += buttonName;
    } else if (calcData.next === '' || calcData.next.match(/\.[0]+$/)) {
      calcData.next = calcData.next.slice(0, calcData.next.length - 1) + buttonName;
    } else calcData.next += buttonName;
  } else if (buttonName === '0') {
    if (calcData.operation === '' && calcData.total !== '0') {
      if (calcData.total === '0' || calcData.total.match(/\.[0]+$/)) {
        calcData.total = calcData.total.slice(0, calcData.total.length - 1) + buttonName;
      } else calcData.total += buttonName;
    } else if (calcData.next !== '') {
      if (calcData.next === '0' || calcData.next.match(/\.[0]+$/)) {
        calcData.next = calcData.next.slice(0, calcData.next.length - 1) + buttonName;
      } else calcData.next += buttonName;
    }
  } else if (buttonName.match(/[-x+÷%]/) && calcData.operation === '') {
    calcData.operation = buttonName;
  }
  return calcData;
}

export default calculate;
