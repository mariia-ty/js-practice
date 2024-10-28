//Lesson 12

const shop = {
    name: "GameStop", 
    locations: 15, 
    items: ["video games", "posters", "controllers", "board games"],
    maxVisitors: 200, 
    open: true, 
    netWorth: 23456789.87,

};

const keys = Object.keys(shop);
//const values = Object.values(shop);
const entries = Object.entries(shop);


//  for (const key in shop) {
//    console.log("Key: ", entries);
//  }

//goods
// const goods = {
//   apples: 6,
//   grapes: 3,
//   bread: 4,
//   cheese: 7,
// };

// const values = Object.values(goods); // [6, 3, 4, 7]

// let total = 0;

// for (const value of values) {
//   total += value;
// }

// console.log(total);

//array
//const houses = ["Arryn", "Frey", "Greyjoy", "Stark", "Lannister", "Tyrell"];
// const completeHouses = [...houses, "Targaryen"];

// console.log(houses); // ['Arryn','Frey','Greyjoy','Stark','Lannister','Tyrell']
// console.log(completeHouses);
 

// const firstBatch = ["Arryn", "Frey", "Greyjoy"];
// const secondBatch = ["Stark", "Lannister", "Tyrell"];

// const houses = [...secondBatch, ...firstBatch];
// console.log(houses); 

// const a = { x: 1, y: 2 };
// const b = { x: 0, z: 3 };

// const c = Object.assign({}, a, b);
// console.log(c);

// const d = { ...a, ...b };
// console.log(d);

// const a = ["Mango"];
// Присвоєння за посиланням.
// Оскільки a це масив, в b записується посилання на вже існуючий
// масив в пам'яті. Тепер a і b вказують на один і той же масив.
// const b = a;
// console.log(a); // ['Mango']
// console.log(b); // ['Mango']

// Змінимо масив, додавши ще один елемент, використовуючи покажчик з a
// a.push("Poly");
// console.log(a);


const products = [
  { name: "apple", price: 2.14, quantity: 4, category: "red" },
  { name: "orange", price: 2.14, quantity: 6, category: "orange" },
  { name: "mango", price: 2.14, quantity: 8, category: "orange" },
  { name: "banana", price: 2.14, quantity: 2, category: "yellow"},
];

function getTotal(products, category) {
    let total = 0;
    for (let index in products) {
      const product = products[index];
      if (product.category === category && product.quantity > 0) {
        total += product.price * product.quantity;
      }
    }
    return total;
};

console.log(getTotal(products, "red"));
