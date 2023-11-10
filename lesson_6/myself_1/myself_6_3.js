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



// Найти эл. input по id
// для того чтобы манипулирувать его value

let inputId = 'entering_answer';
let getInput = document.getElementById(inputId);

let buttonWord1Id = 'show_word_1';
let getButtonWord1Id = document.getElementById(buttonWord1Id);
let buttonWord2Id = 'show_word_2';
let getButtonWord2Id = document.getElementById(buttonWord2Id);
let buttonWord3Id = 'show_word_3';
let getButtonWord3Id = document.getElementById(buttonWord3Id);
let buttonWord4Id = 'show_word_4';
let getButtonWord4Id = document.getElementById(buttonWord4Id);
// let buttonWord5Id = 'show_word_5';
// let getButtonWord5Id = document.getElementById(buttonWord5Id);

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

let buttonId = 'confirm_answer';
let getButton = document.getElementById(buttonId);

let buttonResult = 'my_result';
let getButtonResult = document.getElementById(buttonResult);

// Присвоить value of input -- П.-й
let valueOfInput = getInput.value;

let counter = 0;

function firsWord(word1) {
  // alert(word1);

  function takeInputValue() {
    // alert(word1);
    if (getInput.value === word1) {
      alert('Well done!');
      counter++;
      alert(counter);
    } else {
      // alert('Incorrect/Wrong');
    }
  }
  getButton.addEventListener('click', takeInputValue);
}
firsWord('I');
firsWord('Live');
firsWord('Мой моя моё мои');
firsWord('Твой твоя твоё твои Ваш ваши');
firsWord('My');

// showWord('Я');
// showWord('Живу');

function showWord1(word) {
  alert('Я');
}
getButtonWord1Id.addEventListener('click', showWord1);

function showWord2(word) {
  alert('Живу');
}
getButtonWord2Id.addEventListener('click', showWord2);

function showWord3(word) {
  alert('My');
}
getButtonWord3Id.addEventListener('click', showWord3);

function showWord4(word) {
  alert('Your');
}
getButtonWord4Id.addEventListener('click', showWord4);

function showWord5(word) {
  alert('Мой');
}
// getButtonWord5Id.addEventListener('click', showWord5);

function myResult() {
  window.alert(counter);
}
getButtonResult.addEventListener('click', myResult);
