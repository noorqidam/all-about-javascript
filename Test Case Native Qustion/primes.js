/**
 * ? Contoh Case
 * ? ==============
 *
 * TODO: Input: 10
 * TODO: Output: [2,3,5,7]
 * TODO: Proses:
 * angka 1 bukan prima
 * angka 2 adalah prima -> maka masuk ke dalam deret
 * angka 3 adalah prima -> maka masuk ke dalam deret
 * angka 4 bukan prima
 * angka 5 adalah prima -> maka masuk ke dalam deret
 * angka 6 bukan prima
 * angka 7 adalah prima -> maka masuk ke dalam deret
 * angka 8 bukan prima
 * angka 9 bukan prima
 * angka 10 bukan prima
 * ! maka output adalah [2,3,5,7]
 */

const prime = (num) => {
  let result = [];
  for (let i = 2; i <= num; i++) {
    let isPrima = false;
    for (let j = 2; j <= i; j++) {
      if (j !== i && i % j === 0) {
        isPrima = false;
        break;
      }
    }
    if (isPrima) {
      result.push(i);
    }
  }
  return result;
};

console.log(prime(10));
console.log(prime(27));
console.log(prime(30));
console.log(prime(41));
