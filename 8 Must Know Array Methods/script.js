const items = [
  { name: "Bike", price: 100 },
  { name: "TV", price: 200 },
  { name: "Album", price: 10 },
  { name: "Book", price: 5 },
  { name: "Phone", price: 500 },
  { name: "Computer", price: 1000 },
  { name: "Keyboard", price: 25 },
];

const filteredItems = items.filter((item) => item.price <= 100);

console.log(items);
console.log(filteredItems);

const itemNames = items.map((item) => item.name);

console.log(itemNames);

const foundItem = items.find((item) => {
  return item.name === "Book";
});

console.log(foundItem);

items.forEach((item) => {
  console.log(item.name);
});

const hasInexpensiveItems = items.every((item) => {
  // some, every
  return item.price <= 100;
});

console.log(hasInexpensiveItems);

const total = items.reduce((currentTotal, item) => {
  return item.price + currentTotal;
}, 0);

console.log(total);

const search = [1, 2, 3, 4, 5];
const incledesTwo = search.includes(2);
console.log(incledesTwo);
