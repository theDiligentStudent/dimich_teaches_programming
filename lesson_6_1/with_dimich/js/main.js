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

//// //// //// ////

// const article1ImageUrl // вариант именования Димычем - П.-й ниже
const article1Link =
  'https://thehackernews.com/2024/02/microsoft-openai-warn-of-nation-state.html';
const article1ImageSrc =
  'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjxRK4tPI2hLcsecH1IbrZGpxEBUkSps390MM2wP2PHqm9Q6TLwDgUAU_uGTvAhufbGPtPKrMNnIElu8SAhr5ol_q4XvNDJKLDaIFk96ARir92PcWc6jeMQs1gqlod0lVIjyjZos_yYcxS1ycPEQNvbrnNMQ561FA45cYcBoKbTRaEYsfv_2YY71IlflsA/s728-rw-e30/hackers.jpg';
const article1title =
  'Rhysida Ransomware Cracked, Free Decryption Tool Released';
const article1PublicationDate = 'Feb 12, 2024';
const article1related1Topic = 'Vulnerability';
const article1related2Topic = 'Data Recovery';
const article1BriefDescription =
  'Cybersecurity researchers have uncovered an "implementation vulnerability" that has made it possible to reconstruct encryption keys and decrypt data locked by Rhysida ransomware. The findings were published last week by a group of...';

const article2ImageSrc =
  'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjxRK4tPI2hLcsecH1IbrZGpxEBUkSps390MM2wP2PHqm9Q6TLwDgUAU_uGTvAhufbGPtPKrMNnIElu8SAhr5ol_q4XvNDJKLDaIFk96ARir92PcWc6jeMQs1gqlod0lVIjyjZos_yYcxS1ycPEQNvbrnNMQ561FA45cYcBoKbTRaEYsfv_2YY71IlflsA/s728-rw-e30/hackers.jpg';
const article2title =
  'Four Out of Five Organizations Have Employees Using Breached Applications';
const article2PublicationDate = null;
const article2related1Topic = 'SaaS Security';
const article2related2Topic = 'SSPM';
const article2BriefDescription =
  'New research unveils data on why SaaS applications and their users were so heavily targeted in 2023';
const articleImage3Src =
  'https://gelios.od.ua/storage/cache/15912654645359-280x350.jpg';

// document.write(<img src="article1ImageSrc" alt=""></img>);
// document.write('<img src="articleImage3Src" alt="">');
// document.write('<br>');
// document.write(article2ImageSrc);

// 14/02/24

// I.B.

const article3ImageUrl =
  'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgGKzjBY3OOGttaxkmh8q7aiKyqIRXNwl2tk8tfqxVkOELNUwatuCfFj99ql7EpRXQ7otXkQCrYp8Pn7CvYJoc4GIUvD_AeGk53O9F_HQ3RsYT9AHunGtaGJxq0Jg-YzcX0tCKRkUUmw70FzmAR1vGWuFa0PTdtnESAVgSYxuXP6eJu4CGsOilzdsiYtPq7/s728-rw-e365/machine-learning.jpg';
const article3Title =
  'Microsoft, OpenAI Warn of Nation-State Hackers Weaponizing AI for Cyberattacks';
const isThereArticle3LinkToAffiliateProgram = false;
const article3PublicationDate = 'Feb 14, 2024';
const article3Discussed1Issues = 'Artificial Intelligence /';
const article3Discussed2Issues = ' Cyber Attack';
const article3metaDescription =
  'Nation-state actors associated with Russia, North Korea, Iran, and China are experimenting with artificial intelligence (AI) and large language models (LLMs) to complement their ongoing cyber attack operations. The findings come from a report...';

const article4ImageUrl =
  'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEicyqhWZMGYpF5i1XMZAwGkU4NNNWDJqDBKwmiFO-tP3ZRUn9EhnYl46_ukYUV-m6FbAOB5YneWyL9Te04v2d13y18b_y2gLQ0IaQghnj8e1m_aUNFhH1jaLOCcS7UZSNk6RGCxhwsbHPkZjnVHAxFRQHPusd-MI5Z7sx2GZFx2JuIvQSw1H0lYhNZg4DHW/s728-rw-e365/wing.jpg';
const article4Title = 'Solve Your SaaS Vulnerabilities in Just 2 Hours a Week';
const article4PublicationDate = null;
const isArticle4ThereLinkToAffiliateProgram = true;
const article4partnerIntegration = 'Wing Security';
const article4Discussed1Issues = 'SaaS Security / ';
const article4Discussed2Issues = ' SSPM';
const article4metaDescription =
  'Nation-state actors associated with Russia, North Korea, Iran, and China are experimenting with artificial intelligence (AI) and large language models (LLMs) to complement their ongoing cyber attack operations. The findings come from a report...';

// /// // ///

// C. B.

// document.write('<img src="${article3ImageUrl}" alt="Article 3 image">');

// , '<br>
document.write(
  '<br>',
  '<a href= "https://thehackernews.com/2024/02/microsoft-openai-warn-of-nation-state.html" target="_blank">' +
    '<img src= "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjxRK4tPI2hLcsecH1IbrZGpxEBUkSps390MM2wP2PHqm9Q6TLwDgUAU_uGTvAhufbGPtPKrMNnIElu8SAhr5ol_q4XvNDJKLDaIFk96ARir92PcWc6jeMQs1gqlod0lVIjyjZos_yYcxS1ycPEQNvbrnNMQ561FA45cYcBoKbTRaEYsfv_2YY71IlflsA/s728-rw-e30/hackers.jpg" alt="Article 4 Image">' +
    '</a>',
  `<a href= "${article1Link}" target="_blank">` +
    `<img src= "${article3ImageUrl}" alt="Article 4 Image">` +
    `</a>`,
  // '<br>' + article3Title,
  '<br>' +
    `<a href= "${article1Link}" target="_blank">` +
    '<br>' +
    `<a href= "${article1Link}"` + // ???????   ??????   ????????
    `</a>`,
  article3Title + '<br> <br>' + isThereArticle3LinkToAffiliateProgram,
  '<br>',
  article3PublicationDate,
  `&emsp;` + article3Discussed1Issues + article3Discussed2Issues,
  '<br>',
  '<br>',
  article3metaDescription,
  '<br> <br> <br>',

  `<img src="${article4ImageUrl}" alt="Article 4 Image">`,
  '<br>',
  article4Title,
  '<br> <br>',
  article4PublicationDate,
  '<br>',
  isArticle4ThereLinkToAffiliateProgram,
  '<br>',
  2,
  `&emsp;`,
  article4Discussed1Issues,
  article4Discussed2Issues,
  '<br>',
  '<br>',
  article4metaDescription
);
