// Урок 6-й с Димычем
//   по Общему Программированию
//     1/11/23
//     15/11/23
//     --
//     Две недели -- с 1го по 14-е ноября --
//     я пытался написать САМ (Полностью), ту Про.-у про которую Димыч рассказал в начале этого (6го) урока..... --
//     -- получилось у  меня мало что, т.е. получилось Плохо ---- теперь буду пробовать делать так - как учит - Димыч - в этом видео.
// 16/11/23
//     Вчера (15/11/23) -- решил сделать Немного ПО-ДРУГОМУ (не так, как написал во вчерашнем комментарии) - а вспомнил, что смотрел Маленький Кусочек (начало самое) 6-го ролика --- и в нём видел - Как - Димыч выводит работу Про.-ы на экран Бр.-а....
//     -- я задумался о том, как он это Реализует и (Сам) вспомнил про method prompt -- стал Пробовать ---- и у меня - хоть и не сразу - но кажется (почти всё) начало и стало Получаться.....
//     Сейчас буду Пробовать реализовать Про.-у. Как можно полнее.  Проценты сделать конечно я НЕ смогу но Всё Остальное -- Сегодя сделать Попытаюсь......
// 17/11/23
// Продолжаю возиться с Про.-й Димыча
// Сегодя надо добавть к уже Имеющимся Двум Словам на изучение - ещё Три.
// И сделать Ф.-ю с Сообщением Результат Тренировки.
// + Почищу К. от вчерашних Комментариев с Попытками

let counter = 0;
function showAndGiveWord(word1, word2) {
  // let counter = 0;   // Эту строку ВЫНЕС -- НАРУЖУ Ф.-И -- Иначе НЕ производится Подсчёт, а каждый раз (при Выполнении Ф.-и) - counter - берётся равным 0-лю!!!!
  function doCounter() {
    counter++;
    alert(counter);
  }
  let mainWord = prompt(word1);
  if (mainWord === word2) {
    alert('Well done!');
    doCounter();
  } else {
    alert('Think about it!');
  }
}

// let counter = 0;
// function doCounter() {
//   counter++;
//   alert(counter);
// }

function studyWord() {
  showAndGiveWord('Я', 'I');
  // doCounter();
  showAndGiveWord('Живу', 'Live');
  // doCounter();
  showAndGiveWord('My', 'Мой');
  showAndGiveWord('Name', 'Имя');
  showAndGiveWord('Твой', 'Your');
}

studyWord();

function result() {
  alert(counter);
  if (counter === 3) {
    alert('Not bad!');
  }
  if (counter === 4) {
    alert('Fine!');
  }
  if (counter === 5) {
    alert('Generally Excellent!!');
  }
  if (counter === 1) {
    alert('Try harder (');
  }
  if (counter === 2) {
    alert('Try harder (');
  }
  // else {
  //   alert('Try harder (');
  // }
}
result();

counter = 0;
studyWord();
result();
