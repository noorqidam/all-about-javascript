const fibonacci = (length) => {
  //  Initializing the array with the first and two numbers of the series
  const fibArray = [0, 1];

  // Generating the rest of the series
  for (let index = 2; index < length; index++) {
    fibArray.push(fibArray[index - 1] + fibArray[index - 2]);
  }
  return fibArray;
};

console.log(fibonacci(20));
