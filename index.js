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


const cBg = document.querySelector(".cBg");
const website = document.querySelector("body");
cBg.addEventListener("click", () => {
    website.style.backgroundColor = "teal";
});