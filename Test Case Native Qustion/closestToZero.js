/**
 * ? Closest to Zero
 * ? ===============
 *
 * TODO: [Instruction]
 * Buatlah sebuah function yang mengembalikan nilai temperatur yang paling dekat dengan 0 (nol).
 *
 * TODO: [Description]
 * 1. Function menerima satu parameter berupa array of @temperatures
 * 2. Function mengembalikan sebuah nilai temperatur (positif ataupun negatif) yang paling dekat dengan
 * 3. Jika terdapat dua nilai yang sama (positif dan negatif) maka tampikan nilai positifnya
 * 4. Jika input berupa arry kosong, maka kembalikan nilai 0
 *
 * TODO: [Example]
 * @input = [-1, 2, -3, 4, -5]
 * Berdasarkan input tersebut, -1 merupakan angka paling dekat dengan 0, maka:
 * @output = -1
 *
 *  @input = [10, -14, -87, 43, -76, -10, 86, 94]
 * Berdasarkan input tersebut, terdapat dua nilai yang paling dekat dengan 0 => 10 dan -10,
 * maka ambil nilai positifnya, sehingga:
 * @output = 10
 *
 * TODO: [Rules]
 * 1. Dilarang menggunakan built-in function: map, filter, reduce, forEach
 * 2. Dilarang menggunakan built-in function: indexOf, lastIndexOf, includes, some, every, find, find
 * 3. Dilarang menggunakan built-in function: Math.max, Math.min
 * 4. Dilarang menggunakan built-in function: sort
 */

const closeToZero = (arr) => {
  // Perlu sorting ascending terlebih dahulu
  let swapped;
  let panjangArray = arr.length;
  do {
    swapped = false;
    for (let i = 0; i < panjangArray; i++) {
      if (arr[i + 1] < arr[i]) {
        let TempData = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = TempData;
        swapped = true;
      }
    }
    panjangArray--;
  } while (swapped);

  // Pisahkan Negatif dan Positif
  // Jika lebih kecil dari 0 masukan negatif dan Jika lebih besar dari 0 masukan positif
  let arrNegatif = [];
  let arrPositif = [];

  for (let j = 0; j < arr.length; j++) {
    arr[j] < 0 ? arrNegatif.push(arr[j]) : arrPositif.push(arr[j]);
  }

  // Ambil negatif yang paling terakhir dan positif yang paling awal
  let terdekatNegatif = arrNegatif[arrNegatif.length - 1];
  let terdekatPositif = arrPositif[0];
  // membandingkan jika kedua nya kosong berarti mereturn 0
  if (terdekatNegatif === undefined && terdekatPositif === undefined) {
    return 0;
  } else if (terdekatNegatif === undefined && terdekatPositif) {
    return terdekatPositif;
  } else if (terdekatNegatif && terdekatPositif === undefined) {
    return terdekatNegatif;
    // membandingkan jika keduanya ada di cek sama atau tidak, jika sama ambil yang positif
  } else if (terdekatNegatif * -1 === terdekatPositif) {
    return terdekatPositif;
  } else if (terdekatNegatif * -1 < terdekatPositif) {
    return terdekatNegatif;
  } else {
    return terdekatPositif;
  }
};

console.log(closeToZero([1, -2, -8, 4, 5]));
console.log(closeToZero([-12, -50, -137]));
console.log(closeToZero([42, -5, 12, 21, 5, 24]));
console.log(closeToZero([42, 5, 12, 21, -5, 24]));
console.log(closeToZero([-5, -4, -2, 12, -40, 4, 2, 18, 11, 5]));
console.log(closeToZero([-5, 8, 62, -48, 0, -59, -76, 2, 1, -56, 37, -98, -1]));
console.log(closeToZero([]));
