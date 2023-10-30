const employees = [
  { id: 15, empName: "John", dept: "Support" },
  { id: 10, empName: "Max", dept: "IT" },
  { id: 12, empName: "Bella", dept: "Support" },
  { id: 19, empName: "Amelia", dept: "IT" },
];

let onlyITEmployeed = employees.filter((e) => e.dept === "IT");
console.log(onlyITEmployeed);

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

let mixArray = [1, 4, 5, "Banana", 6, 1, 4, 4, 9, 3, "Banana"];

const uniqueElement = mixArray.filter((element, index) => {
  return mixArray.indexOf(element) === index;
});

console.log(uniqueElement, "tester");

uniqueElement.sort((a, b) => {
  // if else statement
  // check if both element are number
  if (typeof a === "number" && typeof b === "number") {
    return a - b; // sort by number order
  } else if (typeof a === "number") {
    return -1; // numbers come before strings
  } else if (typeof b === "number") {
    return 1; // numbers come before strings
  } else {
    return a.localeCompare(b); // sort by string order
  }

  // switch case statement
  // switch (true) {
  //   case typeof a === "number" && typeof b === "number":
  //     return a - b; // sort by number order
  //   case typeof a === "number":
  //     return -1; // numbers come before strings
  //   case typeof b === "number":
  //     return 1; // numbers come before strings
  //   default:
  //     return a.localeCompare(b); // sort by string order
  // }
});

console.log(uniqueElement);
