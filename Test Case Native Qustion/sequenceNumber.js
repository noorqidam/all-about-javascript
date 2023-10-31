/**
 * ? Sequence Number
 * ? ===============
 *
 *
 * TODO: [Instruction]
 * given this number sequence 2,3,1,5,1,7,1,11,1,13 ...
 * find the pattern and fulfill the functionla requirements
 * the function takes one number input (i) and returns array/vector as output, if there is no item to be returned, it will give empty array instead.
 *
 * TODO: [Rules]
 * 1. Constrait: 0 <= i <= 200
 * 2. function solution(iValue) {
 *     put your code
 *      return[-1]
 *    }
 */

const isPrime = (num) => {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  for (let i = 5; i * i <= num; i++) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
};

function findNextPrime(current) {
  let next = current + 2;
  while (!isPrime(next)) {
    next += 2;
  }
  return next;
}

const solution = (iValue) => {
  if (iValue < 0 || iValue > 200) {
    return [];
  }

  const sequence = [];
  let num = 2;
  let prime = 3;

  for (let i = 0; i < iValue; i++) {
    sequence.push(num);
    if (i % 2 === 0) {
      num = 1;
    } else {
      num = prime;
      prime = findNextPrime(prime);
    }
  }
  return sequence;
};

console.log(solution(0));
console.log(solution(1));
console.log(solution(2));
console.log(solution(3));
console.log(solution(4));
console.log(solution(5));
console.log(solution(12));
