// 29/10/23
// Вспоминаю КАК (??) делается Калькулятор
// потому что за эти месяца 3-4, что я НЕ (!!) повторял.... --- СОВСЕМ ЗАБЫЛ

// let input1 = 'number_1';
// let valueInput1 = document.getElementById(input1);
let valueInput1 = document.getElementById('number_1');
// let input2 = 'number_2';
// let valueInput1 = document.getElementById(input2);
let valueInput2 = document.getElementById('number_2');

let buttonPlus = 'button_plus';
let tapButtonPlus = document.getElementById(buttonPlus);

// Вот Здесь (ниже)..... --- я НЕ могу вспомнить --
//    КАК получить ОБЩУЮ (УНИВЕРСАЛЬНУЮ) Ф.-ю для доступа ко ВСЕМ элементам по ID
//    ---
//    Пробую -- но пока вспомнить .... НЕ получается.....
// let access = function accessToElement(element,id) {
//     element.document.getElementById(id);
// }
// let buttonPlus;
// // accessToElement(buttonPlus, 'button_plus');
// access(buttonPlus, 'button_plus');

// let clickOnButtonPlus = tapButtonPlus.addEventListener('click', clickPlus);

function clickPlus() {
  alert('Hello all');
}

// clickOnButtonPlus();

// function getInputValue(eventObject) {
//   .currentTarget
//   // eventObject.currentTarget
// }

// let getInput1 = valueInput1.value;
// let getInput2 = valueInput2.value;
function minusNumber() {
  // П.-е ОБЯЗАТЕЛЬНО (!!!!) должны быть ВНУТРИ Ф.-и!!!!!
  //  (а НЕ так -- как у меня записано выше)
  let getInput1 = valueInput1.value;
  let getInput2 = valueInput2.value;
  // СЛОЖЕНИЕ ЧИСЕЛ
  //  Таким Вот Образом числа  JS -- НЕ сложатся!!!!, а СКЛЕЯТСЯ.....
  // let result = getInput1 + getInput2;
  //  ДЛЯ ОПЕРАЦИИ СЛОЖЕНИЯ ---- К. НУЖНО ПИСАТЬ ВОТ ТАК !!!!!  ----
  let result = +getInput1 + +getInput2;
  // return result;
  window.alert(result);
}

// так (через let) -- НЕ нужно писать
// let clickOnButtonPlus1 = tapButtonPlus.addEventListener('click', minusNumber);
// ТОЛЬКО ТАК
clickOnButtonPlus1 = tapButtonPlus.addEventListener('click', minusNumber);
// clickOnButtonPlus1();   Эта строчка -- НЕ -- нужна
