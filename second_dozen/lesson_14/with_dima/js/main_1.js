// 6/05/24

// Сегодня начинаю Смотреть и Работать над 14м Ур.-м Димыча про Ф.-и

// Сейчас только Закоммитчу все предыдущие изменения
// где я Досматривал Ур. 13 (Ц.-ы) и прорабатывал его Самостоятельно
// -
// Закоммитчу - и буду начитать этот - 14й Ур.

// 7/05/24
// досмотрел до 14й минуты

// 8/05/24
// по 22ю минуту

// 11/05/24

////// ////// ////// //////

// String to check JS-file connection
// alert('HelIo everyone!');

// 7/05/24

console.log('HelIo everyone!');
window.document.write('HelIo everyone!', '<br>');

function consoleDocument() {
  console.log('HelIo everyone!');
  window.document.write('HelIo everyone!');
  window.document.write('<br>');
}
consoleDocument();

function consoleDocument1(param1, param2, param3) {
  console.log(param1);
  window.document.write(param2);
  window.document.write(param3);
}
consoleDocument1('HelIo everyone!', '<br>', 'HelIo everyone!');
consoleDocument1(1, '<br>', 100);
consoleDocument1('HelIo everyone!', '<br>', 'HelIo everyone!');
consoleDocument1(1, '<br>', 100);

function tagBr() {
  document.write('<br>');
}
function tagBr1(param1) {
  document.write(param1);
}

tagBr();
tagBr1('<br>');

consoleDocument1('Hello, Piter!', '<br>', 'Hello, Kazan!');

// 8/05/24

function consoleDocument2(param1, param2) {
  console.log(param1);
  tagBr();
  tagBr();
  window.document.write(param2);
  tagBr();
}

consoleDocument2('Hello', 'You are my Friend!');

// 11/05/24

function printBrands(param1, param2) {
  document.write('<br>', param1, '<br>', param2, '<br>');
  console.log(param1, param2);
  window.alert(param1);
}

window.printBrands('Lexus ', 'Land Cruiser');

printBrands('Lexus ', 'Land Cruiser');

window.printBrands('Bmw ', 'Honda');

//////

// return

// 1

window.alert('Hello!');

document.write('Hello!');

let promptValue = window.prompt('Your age?');
console.log(promptValue);

let resultMathRandom = Math.random();
console.log(resultMathRandom);

// 2

function showSum(param1, param2) {
  document.write('<br>', param1, '<br>', param2, '<br>');
  console.log(param1, param2);
  // window.alert(param1);

  return 12;
}

let numberReturn = showSum();

console.log(numberReturn);

// write myself

function showSum1(a, b) {
  let sum = a + b;
  // return sum;
  return sum;
}

let lookSum = showSum1(5, 5);

console.log(lookSum);
document.write(lookSum);
