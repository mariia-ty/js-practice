// Lesson 19
// const singleBtn = document.querySelector("#single");

// const handleClick = () => console.log("CLICK!");

// singleBtn.addEventListener("click", handleClick);

// const multiBtn = document.querySelector("#multiple");

// const firstCallback = () => console.log("First callback!");
// const secondCallback = () => console.log("Second callback!");
// const thirdCallback = () => console.log("Third callback!");

// multiBtn.addEventListener("click", firstCallback);
// multiBtn.addEventListener("click", secondCallback);
// multiBtn.addEventListener("click", thirdCallback);

// const addBtn = document.querySelector('button[data-action="add"]');
// const removeBtn = document.querySelector('button[data-action="remove"]');
// const btn = document.querySelector("#btn");

// const handleClick = () => {
//   alert("CLICK EVENT LISTENER ALERT!");
// };

// addBtn.addEventListener("click", () => {
//   btn.addEventListener("click", handleClick);
// });

// removeBtn.addEventListener("click", () => {
//   btn.removeEventListener("click", handleClick);
// });

// const btn = document.querySelector("#btn");

// const handleClick = (event) => {
//   console.log("event: ", event);

//     console.log("event type: ", event.type);

//   console.log("this: ", this);
//   console.log("target: ", event.target);
// };

// btn.addEventListener("click", handleClick);

// const form = document.querySelector(".form");
// const loginInput = form.querySelector('input[type="text"]');
// const passInput = form.querySelector('input[type="password"]');

// form.addEventListener("submit", handleSubmit);

// function handleSubmit(event) {
//   event.preventDefault();

//   const login = loginInput.value.trim();
//   const password = passInput.value.trim();

//   if (login === "" || password === "") {
//     return alert("Пожалуйста введите валидную информацию!");
//   }

//   form.reset();

//   alert(`
//     Спасибо за регистрацию!
//     Логин: ${login}
//     Пароль: ${password}
//   `);
// }

// const btn = document.querySelector("#btn");
// const alertMsg = () => alert("Hello World!");
// btn.addEventListener("click", alertMsg);

// const btn = document.querySelector(".btn");
// const txt = document.querySelector(".txt");

// btn.addEventListener("click", () => {
//     alert(`Hello ${txt.value.trim()}`);
// });

// const cBg = document.querySelector(".cBg");
// const website = document.querySelector("body");
// cBg.addEventListener("click", () => {
//     website.style.backgroundColor = "teal";
// });

// const input1 = document.getElementById("input1");
// const input2 = document.getElementById("input2");
// const setFocusButton = document.getElementById("setFocusButton");
// const focusInfo = document.getElementById("focusInfo");
// Встановлюємо обробник події focus
// input1.addEventListener("focus", () => {
//   focusInfo.textContent = "Поле 1 отримало фокус!";
// });
// input2.addEventListener("focus", () => {
//   focusInfo.textContent = "Поле 2 отримало фокус!";
// });

// // Подія change для текстового поля
//     const textInput = document.getElementById('textInput');
//     const textOutput = document.getElementById('textOutput');
//     textInput.addEventListener('change', () => {
//       textOutput.textContent = `Текст змінено на: ${textInput.value}`;
//     });
// // Подія change для select
//     const selectInput = document.getElementById('selectInput');
//     const selectOutput = document.getElementById('selectOutput');
//     selectInput.addEventListener('change', () => {
//       selectOutput.textContent = `Вибрано: ${selectInput.value}`;
//     });
// // Подія change для checkbox
//     const checkboxInput = document.getElementById('checkboxInput');
//     const checkboxOutput = document.getElementById('checkboxOutput');
//     checkboxInput.addEventListener('change', () => {
//       checkboxOutput.textContent = checkboxInput.checked ? 'Відмічено' : 'Не відмічено';
//     });
// // Подія change для radio
//     const radioButtons = document.querySelectorAll('input[name="radioGroup"]');
//     const radioOutput = document.getElementById('radioOutput');
//     radioButtons.forEach(radio => {
//       radio.addEventListener('change', () => {
//         radioOutput.textContent = `Вибрано: ${radio.value}`;
//       });
//     });

// // Подія input для текстового поля
//     const textInput = document.getElementById('textInput');
//     const liveOutput = document.getElementById('liveOutput');

//     textInput.addEventListener('input', () => {
//       liveOutput.textContent = textInput.value; // Відображення введеного тексту в реальному часі
//     });
// // Подія input для textarea
//     const textareaInput = document.getElementById('textareaInput');
//     const textLength = document.getElementById('textLength');

//     textareaInput.addEventListener('input', () => {
//       textLength.textContent = textareaInput.value.length; // Вивід довжини тексту
//     });

const btn = document.querySelector(".btn");
const txt = document.querySelector(".txt");

btn.addEventListener("click", () => {
  if (txt.style.display != "none") {
      txt.style.display = "none";
      btn.textContent = "Click to Show";
  } else {
      txt.style.display = "block";
      btn.textContent = "Click to Hide";
  }
});
