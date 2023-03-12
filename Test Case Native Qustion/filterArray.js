const employees = [
  { id: 15, empName: "John", dept: "Support" },
  { id: 10, empName: "Max", dept: "IT" },
  { id: 12, empName: "Bella", dept: "Support" },
  { id: 19, empName: "Amelia", dept: "IT" },
];

let onlyITEmployeed = employees.filter((e) => e.dept === "IT");

for (let emp of onlyITEmployeed) {
  console.log(emp.empName);
}

console.log("============");

employees.sort((e1, e2) => {
  if (e1.empName < e2.empName) return -1;
  if (e1.empName < e2.empName) return 1;
  return 0;
});

for (let emp of employees) {
  console.log(emp.empName);
}

console.log("==========================");

const filter = (array, filterFn) => {
  let newArray = [];
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (filterFn(element)) {
      newArray[newArray.length] = element;
    }
  }
  return newArray;
};

let result;
let input = [0, 1, undefined, 2, null, 3, "four", ""];

const filterNullAndUndefined = (inp) => {
  return filter(inp, (el) => el !== null && el !== undefined);
};

result = filterNullAndUndefined(input);
console.log(result);

console.log("==========================");

const animal = [
  { name: "dog", legs: 4, mammal: true },
  { name: "dolphin", legs: 0, mammal: true },
  { name: "eagle", legs: 2, mammal: false },
  { name: "elephant", legs: 4, mammal: true },
  { name: "robin", legs: 2, mammal: false },
  { name: "cat", legs: 4, mammal: true },
  { name: "salmon", legs: 0, mammal: false },
];

const filterByLegCount = (array1, legCount) => {
  return filter(array1, (animal) => animal.legs === 0);
};

console.log(filterByLegCount(animal, 0));
