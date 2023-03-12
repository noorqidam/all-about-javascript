const employees = [
  { id: 15, empName: "John", dept: "Support" },
  { id: 10, empName: "Max", dept: "IT" },
  { id: 12, empName: "Bella", dept: "Support" },
  { id: 19, empName: "Amelia", dept: "IT" },
  { id: 20, empName: "Alexa", dept: "Marketing" },
];

const result = employees.reduce((accumulator, currentValue) => {
  const { dept } = currentValue;
  if (!accumulator[dept]) {
    accumulator[dept] = [];
  }
  accumulator[dept].push(currentValue);
  return accumulator;
}, {});

console.log(result);
