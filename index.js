// //Lesson 5
// let cost;
// const subscription = prompt("What is your subscription type? ");

// switch (subscription) {
//     case "free":
//         cost = 0;
//         alert("You have a free subscription 😉");
//         break;

//   case "pro":
//         cost = 100;
//         alert("You have a pro subscription 😎");
//         break;
    
//   case "premium":
//         cost = 500;
//         alert("You have a premium subscription 🤩");
//         break;
    
//   default:
//     alert("No subscription found 😥");
        
        
// }

// alert(cost);

// Напишіть програму, яка визначає назву дня тижня за його номером.

// Опис задачі:

// 1. Програма повинна попросити користувача ввести номер дня тижня (ціле число від 1 до 7) за допомогою `prompt`.
// 2. Використовуючи інструкцію `switch`, програма має порівняти введений номер з можливими значеннями від 1 до 7 і призначити
//відповідну назву дня тижня:
//    - 1 — Понеділок
//    - 2 — Вівторок
//    - 3 — Середа
//    - 4 — Четвер
//    - 5 — П'ятниця
//    - 6 — Субота
//    - 7 — Неділя

// 3. Якщо користувач вводить значення поза діапазоном від 1 до 7, програма повинна вивести повідомлення "Невірний номер дня".
// 4. Результат повинен виводитися в консоль:
//    - Наприклад, якщо користувач вводить "3", у консолі з'явиться повідомлення: "Вибрано день: Середа" і "Назва дня: Середа".
// - Якщо введено число поза діапазоном, наприклад, "10", у консолі з'явиться повідомлення: "Невірний номер дня".

// let day = parseInt(prompt("Enter the number for the day of the week: "));

// switch (day) {
//   case 1:
//     alert("Вибрано день: Понеділок");
//     break;

//   case 2:
//     alert("Вибрано день: Вівторок");
//     break;

//   case 3:
//     alert("Вибрано день: Середа");
//     break;

//   case 4:
//     alert("Вибрано день: Четвер");
//     break;

//   case 5:
//     alert("Вибрано день: П'ятниця");
//     break;

//   case 6:
//     alert("Вибрано день: Субота");
//     break;

//   case 7:
//     alert("Вибрано день: Неділя");
//     break;

//   default:
//     alert("Невірний номер дня 😥");
// }

//Перепишіть код нижче використовуючи одну конструкцію switch. Результат виведіть на екран. Данні отримайте з інпуту:
// let a = значення інпуту;

// if (a === 0) {
//    p.textContent = 0;
// }
// if (a === 1) {
//   p.textContent = 1;
// }


// if (a === 2 || a === 3) {
//   p.textContent = '2,3';
// }

let a = parseInt(prompt("Enter a value: "));
let result;

switch (a) {
  case 0:
    result = "0";
    break;

  case 1:
    result = "1";
    break;

    case 2:
    case 3:
    result = "2,3";
    break;

    default:
        result = 7;
        break;
}

console.log(result);
