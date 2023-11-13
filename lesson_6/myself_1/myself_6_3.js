// 4/11/23     4,5,6,8
// В начале 6-го видео (своего курса по Программированию) Димыч рассказал - какую Про.-у он будет писать в этом видео
// Сейчас я начну пытаться САМ написать хоть Кусочек её.
// Сколько получится, НО - САМОСТОЯТЕЛЬНО.
// 5/11/23
// Пока получается Лишь Частично.
// -
// Вывожу Первое слово - в input принимаю ответ, кнопкой - подтверждаю, сравниваю с Правильным, если ответ Правильный делаю П.-ю counter ++1 (увеличиваю её З. на 1)....
// --
// Но - когда хочу выводить Второе слово - это уже НЕ получается.... (тогда выводится Первое и Сразу же - Второе, + может Сразу же выскакивать сообщение о НЕправильном ответе)
// ..... Вобщем надо Разбираться дальше....
// 6/11/23
// Создал Новый js-file -- куда перенёс весь работающий - частично - К. -- но убрал Практически Всё - что комментировал Вчера - всё то - что и как я Пробовал (и оно НЕ получалось) -- т.к. оно будет всё Заграмождать место.
// Сегодня буду пробовать Дальше!
// 8/11/23
// Пробую работать над моей Про.-й Дальше.....  Т.к. она рабочая, пока что, %-в, наверное, на 10 - на 15......
// 9/11/23
// Попробую Ещё поработать над моей (Димыча) Про.-й.... Т.к. пока далеко НЕ всё выходит так, как я задумал -- буду Переделывать и Рефакторить её. -- Создам - Ещё Одну - кнопку "Показать Слово" ---- чтобы "разгрузить" -- НЕкорректно работающий addEventListener....
// 10/11/23
// Вчера (9/11/23) сделал Про.-у свою/Димыча до конца.....
// -- получилась она Конечно же Кривая и Корявая......
// -- но Всё таки я же её делал Полностью САМ
// Сегодня Рефакторю её -- как помню -- начинаю сокращать К.
// t 

// Найти эл. input по id
// для того чтобы манипулирувать его value

// Комментирую К. ниже - потому что Рефакторю/Перерабытываю его
//  --
//  Получаю доступ to html-element by ID with universal function
// let inputId = 'entering_answer';
// let getInput = document.getElementById(inputId);

// let buttonWord1Id = 'show_word_1';
// let getButtonWord1Id = document.getElementById(buttonWord1Id);
// let buttonWord2Id = 'show_word_2';
// let getButtonWord2Id = document.getElementById(buttonWord2Id);
// let buttonWord3Id = 'show_word_3';
// let getButtonWord3Id = document.getElementById(buttonWord3Id);
// let buttonWord4Id = 'show_word_4';
// let getButtonWord4Id = document.getElementById(buttonWord4Id);
// // let buttonWord5Id = 'show_word_5';
// // let getButtonWord5Id = document.getElementById(buttonWord5Id);

function giveId(id) {
  let el;
  el = document.getElementById(id);
  return el;
}

// Проверка РАБОТОСПОСОБНОСТИ К.-а для создания (выше) универсальной Ф.-и -- по созданию "Элемента" и ПРИСВОЕНИЮ ЕМУ ID
// let word5 = giveId('show_word_5');
// function greetings() {
//   alert('Hi!');
// }
// word5.addEventListener('click', greetings);

// Комментирую К. ниже - потому что Рефакторю/Перерабытываю его
//  --
//  Получаю доступ to html-element by ID with universal function

// let buttonId = 'confirm_answer';
// let getButton = document.getElementById(buttonId);

// let buttonResult = 'my_result';
// let getButtonResult = document.getElementById(buttonResult);

let getInputId = giveId('entering_answer');

let getButtonWord1Id = giveId('show_word_1');
let getButtonWord2Id = giveId('show_word_2');
let getButtonWord3Id = giveId('show_word_3');
let getButtonWord4Id = giveId('show_word_4');
let getButtonWord5Id = giveId('show_word_5');

let getButtonAnswerId = giveId('confirm_answer');

let getButtonResultId = giveId('my_result');

// Присвоить value of input -- П.-й
let valueOfInput = getInputId.value;

let counter = 0;

alert('Я');

function firsWord(word) {
  // word1
  // alert(word1);

  function takeInputValue() {
    // alert(word1);
    if (getInputId.value === word) {
      alert('Well done!');
      counter++;
      alert(counter);
    } else {
      // alert('Incorrect/Wrong');
    }
    // alert(word1);
  }
  getButtonAnswerId.addEventListener('click', takeInputValue);
}
firsWord('I');
// function word2() {
//   alert('Я');
// }
// word2();
firsWord('Live');
// alert('Я');
firsWord('Мой'); //моя моё мои
firsWord('Твой'); //твоя твоё твои Ваш ваши
firsWord('My');

// showWord('Я');
// showWord('Живу');

// function showWord1(word) {
//   alert('Я');
// }
// getButtonWord1Id.addEventListener('click', showWord1);

// function showWord2(word) {
//   alert('Живу');
// }
// getButtonWord2Id.addEventListener('click', showWord2);

// function showWord3(word) {
//   alert('My');
// }
// getButtonWord3Id.addEventListener('click', showWord3);

// function showWord4(word) {
//   alert('Your');
// }
// getButtonWord4Id.addEventListener('click', showWord4);

// function showWord5(word) {
//   alert('Мой');
// }
// getButtonWord5Id.addEventListener('click', showWord5);

function myResult() {
  window.alert(counter);
  if (counter === 4) {
    alert('Great!');
  }
  if (counter === 5) {
    alert('Completely Excellent!!');
  } else {
    alert('Try More (');
  }
}
getButtonResultId.addEventListener('click', myResult);


// function showWord(getButtonWord, word) {
//   function showWordNumber() {
//     alert(word);
//   }
//   getButtonWord.addEventListener('click', showWordNumber);
// }

// showWord(getButtonWord1Id, 'Я');
// showWord(getButtonWord2Id, 'Живу');
// showWord(getButtonWord3Id, 'My');
// showWord(getButtonWord4Id, 'Your');
// showWord(getButtonWord5Id, 'Мой');

// function currentTarget(eventObject) {
//   let getCurrentTarget = eventObject.currentTarget;
// }

function useCurrentTarget(eventObject) {
  let currentTarget = eventObject.currentTarget;
  let currentButton = currentTarget.textContent;
  return(currentButton);
}

// function ifContentButton() { 
function ifContentButton(currentButton) { 
  useCurrentTarget();
    if(currentButton === 'Show Word 1') {
      alert('Я');
    } 
    if(currentButton === 'Show Word 2') {
      alert('Живу');
    } 
    if(currentButton === 'Show Word 3') {
      alert('My');
    } 
    if(currentButton === 'Show Word 4') {
      alert('Your');
    } 
    if(currentButton === 'Show Word 5') {
      alert('Мой');
    } else {

    }
}
// ifContentButtonElse.addEventListener('click', useCurrentTarget);
getButtonWord1Id.addEventListener('click', ifContentButton);