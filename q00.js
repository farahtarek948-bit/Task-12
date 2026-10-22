// =================================1=============================

const numbers = [10, 20, 30, 40,50];

const sum = numbers.reduce((total, number) => {
  return total + number;
}, 0);

console.log(sum);

// =================================2=============================

const N = [1, 2, 3, 4, 5];

const doubled = numbers.map(number => number * 2);

console.log(doubled);


// =================================3=============================

const users = [
  { id: 1, name: "Ahmed", age: 22 },
  { id: 2, name: "Mona", age: 25 },
  { id: 3, name: "Ali", age: 20 }
];

const names = users.map(user => user.name);

console.log(names); // ["Ahmed", "Mona", "Ali"]

// =================================4=============================

const numb = [1, 2, 3, 4, 5, 6, 7, 8];

const evenNumbers = numb.filter(numb => numb % 2 === 0);

console.log(evenNumbers); // [2, 4, 6, 8]

// =================================5=============================

const user = [
  { name: "Ahmed", age: 17 },
  { name: "Mona", age: 22 },
  { name: "Ali", age: 15 },
  { name: "Sara", age: 30 }
];

const adults = user.filter(users => users.age >= 18);

console.log(adults);

// =================================6=============================

const products = [
  { id: 1, name: "Laptop", price: 30000 },
  { id: 2, name: "Phone", price: 15000 },
  { id: 3, name: "Tablet", price: 10000 }
];

const produc = products.find(item => item.name === "Phone");

console.log(produc);

// =================================7=============================

const product = [
  { name: "Laptop", stock: 0 },
  { name: "Phone", stock: 0 },
  { name: "Tablet", stock: 5 }
];

const allHaveStock = product.every(product => product.stock > 0);

console.log(allHaveStock); // false

// =================================8=============================

const cart = [
  { name: "Laptop", price: 30000 },
  { name: "Phone", price: 15000 },
  { name: "Tablet", price: 10000 }
];

const total = cart.reduce((sum, item) => sum + item.price, 0);

console.log(total); // 55000