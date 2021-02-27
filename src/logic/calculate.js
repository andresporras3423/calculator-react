export function calculate(obj1, buttonName) {
  const obj = obj1;
  if (buttonName === '=') {
    if (obj.operation === '+') obj.total += obj.next;
    if (obj.operation === '-') obj.total -= obj.next;
    if (obj.operation === '÷') obj.total /= obj.next;
    if (obj.operation === 'x') obj.total *= obj.next;
    obj.operation = '';
    obj.next = '';
  } else if (buttonName === 'AC') {
    obj.total = '0';
    obj.operation = '';
    obj.next = '';
  } else if (buttonName === '+/-') {
    obj.total *= -1;
    obj.operation = '';
    obj.next = '';
  } else if (buttonName === '%') {
    obj.total /= 100;
    obj.operation = '';
    obj.next = '';
  } else if (buttonName === '.') {
    if (obj.operation === '' && obj.total.match(/\./) == null) {
      obj.total = `${obj.total}.0`;
    } else if (obj.next.match(/\./) === null) {
      if (obj.next === '') obj.next = '0.0';
      else obj.next = `${obj.next}.0`;
    }
  } else if (buttonName.match(/[1-9]/) !== null) {
    if (obj.operation === '') {
      if (obj.total === '0') obj.total = buttonName;
      else obj.total += buttonName;
    } else {
      obj.next += buttonName;
    }
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
  } else if (buttonName.match(/[-x+÷]/) && obj.operation === '') {
    obj.operation = buttonName;
  }
  return obj;
}

export default calculate;
