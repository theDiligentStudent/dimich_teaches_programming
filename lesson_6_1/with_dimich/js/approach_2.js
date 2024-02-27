// 12/02/24
// продолжаю смотреть/делать 6й Ур. Димыча -- как я его называю - 5а --
// "П.-е и визуализация Д.-х"   с 11й минуты

// 13.14.15/02/24
// Досмотрел с Димычем Ур. до 31-й минуты и Остановился
// -- услышал, что он будет Визуализировать Весь К. с помощью
// document.write() --- и попробовал сделать всё Сам,....
// НЕ сам конечно - с помощью ДжиПиТи ----
// Сделал почти Всё -- теперь осталось сделать чтобы всё было НЕ просто/только -- Текстам и Картинками
// -- но ещё и ССЫЛКАМИ

// 17 и 18/02/24
// Работал над тем чтобы сделать КАРТИНКИ - ССЫЛКАМИ
// Сделал !! - с помощью ДжиПиТи, конечно,
// Но Всё же
// Работает в самом коде и Через П.-е и просто -- Через Ссылки
// --
// Я сделал только пока ТАК - только с Первой картинкой ----
// ----  теперь надо сделать точно также -- со всем Текстом ----
// чтобы нажатие на Любой текст - ССылало на Сайт
// (также -- как это сделано/работает на сайте)

// 26/02/24
// смотрю/делаю за Димычем - Дальше --- с 26-й минуты (по 32-ю)

// 27/02/24
// смотрю/делаю за Димычем - Дальше --- с 32-й минуты (по 44-ю)


//// //// //// ////

// const article1ImageUrl // вариант именования Димычем - П.-й ниже

// 14/02/24

// // //  I.B.

// article one

// const article3Link =
// 'https://thehackernews.com/2024/02/microsoft-openai-warn-of-nation-state.html';
const article3ImageUrl =
  'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgGKzjBY3OOGttaxkmh8q7aiKyqIRXNwl2tk8tfqxVkOELNUwatuCfFj99ql7EpRXQ7otXkQCrYp8Pn7CvYJoc4GIUvD_AeGk53O9F_HQ3RsYT9AHunGtaGJxq0Jg-YzcX0tCKRkUUmw70FzmAR1vGWuFa0PTdtnESAVgSYxuXP6eJu4CGsOilzdsiYtPq7/s728-rw-e365/machine-learning.jpg';
const article3Title =
  'Microsoft, OpenAI Warn of Nation-State Hackers Weaponizing AI for Cyberattacks';
const article3PublicationDate = 'Feb 14, 2024';
// const isThereArticle3LinkToAffiliateProgram = false;
// const isThereArticle3LinkToAffiliateProgramUrl = null;  //  Incorrect encoding
const isThereArticle3LinkToAffiliateProgramUrl = false; //  Correct encoding
const article3partnerIntegration = null;
const article3Discussed1Issues = 'Artificial Intelligence /';
const article3Discussed2Issues = ' Cyber Attack';
const article3metaDescription =
  'Nation-state actors associated with Russia, North Korea, Iran, and China are experimenting with artificial intelligence (AI) and large language models (LLMs) to complement their ongoing cyber attack operations. The findings come from a report...';

// article two

const article4ImageUrl =
  'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEicyqhWZMGYpF5i1XMZAwGkU4NNNWDJqDBKwmiFO-tP3ZRUn9EhnYl46_ukYUV-m6FbAOB5YneWyL9Te04v2d13y18b_y2gLQ0IaQghnj8e1m_aUNFhH1jaLOCcS7UZSNk6RGCxhwsbHPkZjnVHAxFRQHPusd-MI5Z7sx2GZFx2JuIvQSw1H0lYhNZg4DHW/s728-rw-e365/wing.jpg';
const article4Title = 'Solve Your SaaS Vulnerabilities in Just 2 Hours a Week';
const article4PublicationDate = null;
// const isArticle4ThereLinkToAffiliateProgram = true;      //  incorrect entry
// const isArticle4ThereLinkToAffiliateProgramUrl =
//   'https://thehackernews.uk/state-of-ai-cloud-2024';
// const article4partnerIntegration = 'Wing Security';
const isArticle4ThereLinkToAffiliateProgramUrl = 'true';
const article4partnerIntegrationUrl =
  'https://thehackernews.uk/state-of-ai-cloud-2024';
const article4Discussed1Issues = 'SaaS Security / ';
const article4Discussed2Issues = ' SSPM';
const article4metaDescription =
  'Nation-state actors associated with Russia, North Korea, Iran, and China are experimenting with artificial intelligence (AI) and large language models (LLMs) to complement their ongoing cyber attack operations. The findings come from a report...';

// /// // ///

// C. B.

// Пример с Д.В.
document.write('Hello!!');
document.write('<h1>', 'Hello!!', '</h1>');

// САМ - РАБОЧИЙ К.

document.write('<br>', '</br>');
document.write(`<img src='${article3ImageUrl}' alt='article image 3'/>`);
document.write('<h2>', article3Title, '</h2>');

// в строках 86 и 89 ---- РАВНОЗНАЧНЫЙ К.
document.write('<img src=', '"',article3ImageUrl, '"', 'alt=', '"', 'article 3 image', '"', '/>');
// alt="article image 3"

document.write('<img src=' + '"' + article3ImageUrl + '"' + 'alt=' + '"' + 'article 3 image' + '"' + '/>');