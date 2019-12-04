console.log('********FIRST********')
const cities = ['Москва', 'Санкт-Петербург', 'Воронеж', 'Тула', 'Краснодар', 'Сочи', 'Симферополь'];

const getCities = (arr) => {
  // let result = `${arr[0]}, ${arr[1]}, ${arr[2]}.`;
  let result = `${arr.join(', ')}.`;
  
  return result;
}

console.log(getCities(cities));

console.log('********SECOND*********')
const number1= 37.4;
const number2 = 37.8;

const toMakeRound = (num) => {
  let result = Math.round(num / 5) * 5;

  return result;
}

console.log(toMakeRound(number1));
console.log(toMakeRound(number2));

console.log('********THIRD**********')

const words = ['Компьютер', 'Компьютера', 'Компьютеров']

const makeCases = (num, format) => {  
  let totalNum = num % 10;
  let result = '';

  if (totalNum == 1) result = `${num} ${format[0]}`;
  else if (totalNum > 1 && totalNum < 5) result = `${num} ${format[1]}`;
  else result = `${num} ${format[2]}`;

  return result;
}

console.log(makeCases(21, words))
console.log(makeCases(32, words))
console.log(makeCases(55, words))

console.log('********FOURTH*********')

const simpleNumber = (num) => {
  let result = '';
  if (num % 2 !== 0) result = true;
  else result = false;

  return result;
}

console.log(simpleNumber(11))
