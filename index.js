//lesson 17
// const btn = document.querySelector(".btn");
// btn.style.backgroundColor = "red";
// btn.style.border = "none";
// btn.style.width = "60px";
// btn.style.height = "30px";

// console.log(btn.style);

// btn.classList.add("txt");
// btn.classList.remove("txt");
// btn.classList.toggle("red");

// btn.textContent = "hi";

// 1. Отримайте доступ до списку
// 2. Додайте жовтий колір фону
// 3. Додайте клас "site-nav__link" до посилання
// 4. Збільшіть розмір шрифта посилання

const siteNav = document.querySelector(".site-nav");
siteNav.style.backgroundColor = "yellow"; 
siteNav.style.listStyle = "none";
const link = document.querySelector("a");
link.classList.toggle("site-nav__link");
link.style.fontSize = "24px";
