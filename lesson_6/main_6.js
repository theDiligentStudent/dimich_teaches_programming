// Урок 6-й с Димычем
//   по Общему Программированию
//     1/11/23
//     15/11/23
//     --
//     Две недели -- с 1го по 14-е ноября --
//     я пытался написать САМ (Полностью), ту Про.-у про которую Димыч рассказал в начале этого (6го) урока..... --
//     -- получилось у  меня мало что, т.е. получилось Плохо ---- теперь буду пробовать делать так - как учит - Димыч - в этом видео.
// 25/11/23
//     К Сегодняшнему дню я сделал Про.-у Димыча
//     записал весь К., коммиты, комментарии разные -- закончил её где-то неделю назад....
//     и вот Сейчас - начал смотреть видео Димыча.
// 28/11/23
//   Продолжаю смотреть видео Димыча ---- и копипастить )) за ним.... или Перед ним
// 29/11/23
//  Смотрю видео Димыча Дальше с 18-й минуты
// 30/11/23
// Сперва -- Удаляю Всю Работу -- которую проделал Ранее и уже закомментировал,
// Все варианты Выполнения Про.-ы (какой она была Вначале/Раньше).
// После этого начинаю смотреть видео Димыча дальше -- где-то с 20-й минуты.
// Повспоминал как работает method prompt --- а то забыл уже...... - Димыч в видео уже перешёл к нему - поэтому я попробовал Вспомнить Сам - увидел - что Забыл..... -- и стал вспоминать.
// 2/12/23
// Сперва напишу по памяти всю основную Про.-у, которую написал Димыч в своём 6-м видео к 19-й минуте. (Это Повторение заняло у меня 40 минут) -- Потом продолжу смотреть видео с Димычем.
// 3/12/23
// Сейчас буду смотреть видео (6-е) Димыча дальше, с 22-й минуты.
// Но - сперва - поудаляю много комментариев, работы (более ранней) над К.-м Про.-ы.
// 4/12/23
// После просмотра 26-ти минут 6-го урока Димыча -- опять остановлюсь
// и попробую (на основании того, что уже сделал с Димычем) доделать Про.-у САМ.
// Так - как Получится.
// Сперва нужно сделать Одну Общую Ф.-ю для всех prompt и выводить prompt на экран - с помощью Ф.-и, потом нужно сделать if else -- меньше половины правильных ответов или больше. И %-ты.
// Поехали.
// Всё!!   -----  За 1:10 - полностью всё сделал. Протестил.   ..... И (как мне кажется) - Всё Работает!!.....

// 5/12/23
// (это было Вчера)
// забыл что мне нужно вывести на экран сообщение о количестве %-в Правильных ответов..... - думал, что это Пустяк - и быстро справлюсь.....
// --
// Попробовал - но НЕТ!!  НЕ получилось.
// Попробовал сам, потом где-то час с помощью ДжиПиТи мучался .....
// Но в итоге -- так и НЕ получилось.
// Доделал сегодня
// --
// 6/12/23
// Сейчас в ГитХаб сохраню всё так как есть - с комментариями, потом - удалю ЛИШНИЕ КОМЕНТЫ И ЕЩЁ РАЗ СОХРАНЮ -- а потом - то, что уже останется опять Закомментирую --- и буду Дальше - смотреть видео с Димычем......
//   ------------------------
//   -------------------------------

// ==================

// 2/12/23
// ----
// initialization block
let rusWord0 = 'производительность'; // 1
let engWord0 = 'performance';

let rusWord1 = 'обида'; // 2
let engWord1 = 'resentment'; // , hurt, offense, insult ---- additional words

let rusWord2 = 'ты обиделся?'; // 3
let engWord2 = 'are you offended?';

let promptOutput = 'enter a word in English';

let counter = 0; // enter the counter variable
// counter += 1;

let totalNumberOfWords = 3; // 4/12/23  I enter a variable - totalNumberOfWords

// let percentageOfCorrectAnswers = (counter / totalNumberOfWords) * 100; // 4/12/23 I enter a variable - percentageLOfCorrectAnswers and assign it a value

// let percentageOfCorrectAnswers = Math.ceil((counter / totalNumberOfWords) * 100); // 4/12/23 I enter a variable - percentageLOfCorrectAnswers and assign it a value

// let percentageOfCorrectAnswers = Math.round(
//   (counter / totalNumberOfWords) * 100
// ); // 4/12/23 I enter a variable - percentageLOfCorrectAnswers and assign it a value

let percentageOfCorrectAnswers = (counter / totalNumberOfWords) * 100; // 4/12/23 I enter a variable - percentageLOfCorrectAnswers and assign it a value

// let formattedPercentage = Number(percentageOfCorrectAnswers.toFixed(2));

// let messageAboutThePercentage = 'Your result is ' + percentageOfCorrectAnswers.toFixed(2) + '%'; // 5/12/23
let messageAboutThePercentage =
  'Your result is ' + percentageOfCorrectAnswers + '%'; // 5/12/23

// code block
// 4/12/23
function checkingKnowledgeOfForeignWords(word1, word2) {
  let wordWithAnswer = prompt(word1, promptOutput); // 1
  alert(wordWithAnswer === word2);
  if (wordWithAnswer === word2) {
    counter++;
    // counter += 1;
    alert(counter);
    percentageOfCorrectAnswers = (counter / totalNumberOfWords) * 100;
  }
}

checkingKnowledgeOfForeignWords(rusWord0, engWord0);
checkingKnowledgeOfForeignWords(rusWord1, engWord1);
checkingKnowledgeOfForeignWords(rusWord2, engWord2);

function finalMessage() {
  // counter += 1;
  // alert(percentageOfCorrectAnswers.toFixed(2)); // 5/12/23
  alert('Your result is ' + Math.round(percentageOfCorrectAnswers) + '%'); // 5/12/23  6/12/23
  // alert(messageAboutThePercentage); // 5/12/23
  if (percentageOfCorrectAnswers === 0) {
    // if (formattedPercentage > 50) {
    alert('Friend, try harder!');
  } else if (percentageOfCorrectAnswers > 50) {
    // if (formattedPercentage > 50) {
    alert('Friend, you are well done!');
  } else {
    alert('Well done, but try harder!');
  }
}

finalMessage();
