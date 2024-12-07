//lesson 18

// const heading = document.createElement("h2");
// console.log(heading);
// heading.textContent = "Heading 2";
// console.log(heading);

// const image = document.createElement("img");
// image.src =
//     "https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg";
// console.log(image);

// const container = document.querySelector("#container");
// const newElement = document.createElement("p");
// newElement.textContent = "hello";
// container.append(newElement);

// const anotherElement = document.createElement("h4");
// anotherElement.textContent = "Header";
// container.prepend(anotherElement);
// container.after(anotherElement);
// container.before(anotherElement);

// const container = document.getElementById("container");
// console.log("Початковий вміст:", container.innerHTML);

// container.innerHTML = `
//   <h2>Оновлений вміст</h2>
//   <p>Цей текст додано за допомогою innerHTML</p>
// `;
// console.log("Новий вміст:", container.innerHTML);

// const products = [
//   { name: "Телефон", price: 12000 },
//   { name: "Ноутбук", price: 35000 },
//   { name: "Навушники", price: 2500 },
// ];
// const container = document.getElementById("container");
// let productHTML = "<h2>Список товарів:</h2><ul>";
// products.forEach((product) => {
//   productHTML += `<li>${product.name} - ${product.price} грн</li>`;
// });
// productHTML += "</ul>";
// container.innerHTML = productHTML;

// container.innerHTML = "";


const header = document.createElement("h1");
header.textContent = "Привіт, це перший мій створений елемент!";
header.classList.add = "title";
const container = document.getElementById("container");
container.appendChild(header);
header.style.color = "blue";