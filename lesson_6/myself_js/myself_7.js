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
// 18/11/23  -- Вчера сделал Рефакторинг Пор.-ы Димыча....
// - Теперь она работает практически так - как говорил (задумал) Димыч в Начале Ролика, за исключением того -
// что в конце НеТ Сообщения о количестве Правильных Ответов в Процентах.......   Это я сейчас *18/11/23* постараюсь Исправить/Доделать.... - chatGPT уже подсказал Решение. -- Когда буду пробовать или Сделаю -- то Закомитчу Изменения.
// 19/11/23
// Вчера -- Полностью Закончил работать над Про.-й Димыча !!!!!!
// Сделал Подсчёт Правильных ответов в %-ах (с помощью chatGPT) (думал что будет сложно - а оказалось Очень Легко), вывожу это Сообщением alert на экран
// разобраля (с помощью chatGPT) с Ф.-ей "if else"  (у меня Работает вот по Такой схеме: if -- else if -- else).
// Кажется - Всё Полностью - Протестировал -- и кажется --
// всё работает Как Часы.......
// Сегодня осталось только Поудалять все комментарии -- с попытками наладить работу (100%-ную) -- и ещё раз Залить все изменения на github.com




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

function studyWord() {
  showAndGiveWord('Я', 'I');
  showAndGiveWord('Живу', 'Live');
  showAndGiveWord('My', 'Мой');
  showAndGiveWord('Name', 'Имя');
  showAndGiveWord('Твой', 'Your');
}

studyWord();

// function result() {
//   // alert(counter);

//   let showPercentage = percentageOfAnswers();
//   alert('The number of Correct answers is ' + showPercentage + ' %.');

//   if (counter === 3) {
//     alert('Not bad!');
//   }
//   if (counter === 4) {
//     alert('Fine!');
//   }
//   if (counter === 5) {
//     alert('Generally Excellent!!');
//   }
//   if (counter === 1) {
//     alert('Try harder (');
//   }
//   if (counter === 2) {
//     alert('Try harder (');
//   }
//   if (counter === 0) {
//     alert('Try your best, buddy!!');
//   }
//   // else {
//   //   alert('Try harder (');
//   // }
//   // let showPercentage = percentageOfAnswers();
//   // alert('The number of Correct answers is ' + showPercentage + ' %.');

// }

function percentageOfAnswers() {
  let totalAnswer = 5;
  let rightAnswers = counter;
  let percentage = (rightAnswers / totalAnswer) * 100;
  return percentage;
}

// Разбираюсь с Ф.-й -  --- Почему она у меня НЕкорректо работает.....
// function result() {

//   let showPercentage = percentageOfAnswers();
//   alert('The number of Correct answers is ' + showPercentage + ' %.');

//   if (counter < 3) {
//     alert('Try again!');
//   }
//   // if (counter === 3) {
//   //   alert('Not bad.');
//   // }
// //  if (counter === 5) {
// //     alert('Generally Excellent!!');
// //   }
//   else {
//     // alert('Excellent!');
//     alert('Great!');
//   }
// }

function result() {
  let showPercentage = percentageOfAnswers();
  alert('The number of Correct answers is ' + showPercentage + ' %.');

  if (counter < 3) {
    alert('Try again!');
  } else if (counter === 3) {
    alert('Not bad.');
  }
  //  if (counter === 5) {
  //     alert('Generally Excellent!!');
  //   }
  else {
    // alert('Excellent!');
    alert('Great!');
  }
}

result();

// Тренировка Начинается Заново!!!!
// counter = 0;
// studyWord();
// result();
