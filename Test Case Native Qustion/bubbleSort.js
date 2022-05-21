let data = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
do {
  swapped = false;
  for (let i = 0; i < data.length; i++) {
    let leftElement = data[i];
    let rightElement = data[i + 1];
    if (leftElement > rightElement) {
      data[i] = rightElement;
      data[i + 1] = leftElement;
      swapped = true;
    }
  }
  console.log(data);
} while (condition);
