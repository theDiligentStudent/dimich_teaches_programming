// 29/10/23
// Вспоминаю КАК (??) делается Калькулятор
// потому что за эти месяца 3-4, что я НЕ (!!) повторял.... --- СОВСЕМ ЗАБЫЛ

let input1 = 'input_1';
let valueInput1 = document.getElementById(input1);

// let buttonPlus = 'button_plus';
// let tapButtonPlus = document.getElementById(buttonPlus);


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


let clickOnButtonPlus = tapButtonPlus.addEventListener('click', clickPlus);

function clickPlus () {
  alert('Hello all');
}

clickOnButtonPlus();
