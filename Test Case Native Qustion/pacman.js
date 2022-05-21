/**
 * ? Pacman
 * ? ======
 *
 * TODO: [Description]
 * Anda sedang bermain game pacman. Function pacman menerima input berupa array
 * yang merupakan field untuk pacman berjalan dan mengembalikan output berupa array
 * field yang telah ditelusuri oleh Pacman.
 * Disini karakter Pacman dipresentasikan sebagai 'C'
 *
 * Disini ada papan permainan (yang dipresentasikan sebagai array).
 * papan permainan -> ['.', '.', '*', '$']
 *
 * - '.' merupakan jalan biasa yang dapat dilewati pacman
 * - '*' merupakan makanan
 * - '$' merupakan musuh
 *
 * Jika pacman bertemu titik, maka dia akan berjalan melewatinya.
 * Jika pacman bertemu makanan, dia akan makan makanan tersebut dan tempat tersebut akan menjadi titik '.'
 * Jika pacman bertemu dengan huruf '$' maka pacman akan langsung mati.
 *
 * TODO: [Example]
 * 1.
 * @Input = ['.', '*', '*', '*']
 * Pacman akan menelusuri papan permainan, dia akan bertemu '*' dan makan makanan tersebut
 * lalu melanjutkan perjalanan sampai index terakhir papan, maka:
 * @Output = ['.', '.', '.', '.', 'C']
 *
 * 2.
 * @Input = ['.', '*', '$', '*']
 * Pacman berjalan terus, tapi dia mati karena bertemu dengan '$',  maka:
 * @Output = ['.', '.', '$', '*']
 *
 * 3.
 * @Input = ['.', '*', '*', '.', '$', '*', '*']
 * Disini. ketika pacman berada pada index ke 4 dari array tersebut.
 * dia bertemu dengan sebuah monster '$'. Makan, pacman di titik tersebut langsung mati, dan
 * permainan tidak berubah setelah pacman menyentuh mush tersebut, sehingga:
 * @Output = ['.', '.', '.', '.', '$', '*', '*']
 *
 * TODO: [Rules]
 * 1. Wajib menuliskan pseudocode atau -50
 * 2. Dilarang menggunakan iterators (forEach, map, filter, reduce)
 * 3. Dilarang menggunakan built-in function: indexOf, lastIndexOf, some, every, find, findIndex, includes
 */

const pacman = (array) => {
  let result = array.slice();
  for (let i = 0; i < result.length; i++) {
    if (array[i] === "$") {
      break;
    } else {
      if (i === result.length - 1) {
        result[i] = "C";
      } else {
        result[i] = ".";
      }
    }
  }
  return result;
};

console.log(pacman(["*", ".", ".", "*"]));
console.log(pacman([".", "*", "$", "*"]));
console.log(pacman([".", ".", ".", ".", "*", "*", "*", "*"]));
console.log(pacman([".", "*", "*", ".", "$", "*", "*"]));
console.log(pacman([]));
