/**
 * ? Palindrome string
 * ? =================
 *
 *
 * TODO: [Instruction]
 * make it palindrome
 * Descriptions:
 * String is called a palindrome if it is read the read right-to-left or left-to-right, it produces the same string.
 * Example of strings that are palindrome are `telolet` and `kasurrusak`.
 * Example of string that are not palindrome are: `makan` (because when read from the right-to-left will be a string `nakam`) and `mandi` (because when read from the right-to-left will be a string `idam`)
 *
 * TODO: [Rules]
 * 1. You are given a string, you can change the position of each letter/character in the string. determineif you can convert the string into a palindrom string!
 * 2. Input Format
 *    You will be asked to implement the makePalindrome(s) function where S is a string which the characters in S are only the lowercase english alphabet.
 * 3. Output Format
 *    makePalindrome(S) returns 1 boolean data type x. return the value X as true if you can convert the string S into a palindrome string, and return the value of X as false if you cannot convert the string S into a palindrome string.
 * ? Constraints :
 * ? 1 <= |S| <= 100000
 * ? 'a' <= S <= 'z' or in other words, the charactes in S are only in the lowercase English
 * alphabet
 * example:
 * input S = " aakkrrssuyu "
 * input S = " aaabbb "
 * explanation
 * for the input 1, we can form the string S into `kasurrusak` which is a palindrome, andnote that we can also construct the string `rusakkasur` which is also a palindrome
 *
 * since we can convert the string S into a string that is a palindrome, makePalindrome(S) return true
 * for inputexample 2 above, it can be provedthat there is no way to convert the string S into a palindrome string. Then makePlaindrome(s) return false
 * 4. function solution(iValue) {
 *     put your code
 *      return false
 *    }
 */

const makePalindrome = (s) => {
  const charCount = new Map();

  for (const char of s) {
    if (charCount.has(char)) {
      charCount.set(char, charCount.get(char) + 1);
    } else {
      charCount.set(char, 1);
    }
  }

  let addCount = 1;

  for (const count of charCount.values()) {
    if (count % 2 !== 0) {
      addCount++;
    }
  }

  return addCount <= 1;
};

console.log(makePalindrome("aakkrrssuyu"));
console.log(makePalindrome("aaabbb"));
console.log(makePalindrome("kasurrusak"));
