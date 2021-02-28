import { operate } from './operate';

export function calculate(obj1, buttonName) {
  const obj = obj1;
  if (obj.total === 'Error') obj.total = '0';
  if (buttonName === '=' && obj.next !== '') {
    obj.total = operate(obj.total, obj.next, obj.operation);
    obj.operation = '';
    obj.next = '';
  } else if (buttonName === 'AC') {
    obj.total = '0';
    obj.operation = '';
    obj.next = '';
  } else if (buttonName === '+/-') {
    if (obj.operation === '') obj.total *= -1;
    else obj.next *= -1;
  } else if (buttonName === '.') {
    if (obj.operation === '') {
      if (obj.total.match(/\./) === null) obj.total = `${obj.total}.0`;
    } else if (obj.next === '') obj.next = '0.0';
    else if (obj.next.match(/\./) === null) obj.next = `${obj.next}.0`;
  } else if (buttonName.match(/[1-9]/) !== null) {
    if (obj.operation === '') {
      if (obj.total === '0' || obj.total.match(/\.[0]+$/)) {
        obj.total = obj.total.slice(0, obj.total.length - 1) + buttonName;
      } else obj.total += buttonName;
    } else if (obj.next === '' || obj.next.match(/\.[0]+$/)) {
      obj.next = obj.next.slice(0, obj.next.length - 1) + buttonName;
    } else obj.next += buttonName;
  } else if (buttonName === '0') {
    if (obj.operation === '' && obj.total !== '0') {
      if (obj.total === '0' || obj.total.match(/\.[0]+$/)) {
        obj.total = obj.total.slice(0, obj.total.length - 1) + buttonName;
      } else obj.total += buttonName;
    } else if (obj.next !== '') {
      if (obj.next === '0' || obj.next.match(/\.[0]+$/)) {
        obj.next = obj.next.slice(0, obj.next.length - 1) + buttonName;
      } else obj.next += buttonName;
    }
  } else if (buttonName.match(/[-x+÷%]/) && obj.operation === '') {
    obj.operation = buttonName;
  }
  return obj;
}

export default calculate;
