/**
 * ? Slice and Dice
 * ? ==============
 *
 * TODO: Diberikan sebuah function bernama slice dimana function tersebut menerima tiga parameter.
 * @param First Parameter Pertama bernama `data` bertipe array
 * @param Second Parameter kedua bernama `index` bertipe array (optional)
 *
 * ? `index` dapat berisi 0,1, atau 2 angka:
 *  1. Jika index berisi 2 angka, maka index[0] merupakan titik mulai dan index[1] merupakan akhir,
 *     jadi array yang diambil adalah `dari mulai hingga sebelum selesai`
 *  2. Jika index berisi 1 angka, maka index[0] merupakan titik mulai
 *     jadi array yang diambil adalah `dari mulai hingga akhir array`
 *  3. Jika index tidak berisi angka, maka array yang diambil adalah `dari awal hingga akhir array`
 *
 * TODO: ASUMSI:
 * - jika value index[0] lebih besar dibandingkan jumlah data array,
 *   atau index[0] lebih besar dari index[1] maka function akan mengembalikan array kosong
 *
 * TODO: RULES:
 * ! `DILARANG MENGGUNAKAN` build in function selain .push
 */

// const slice = (data, index) => {
//   const indexAwal = index[0];
//   const indexAkhir = !index[1] ? data.length : index[1];
//   if (!indexAwal) {
//     return data;
//   }

//   const result = [];
//   for (let i = 0; i < data.length; i++) {
//     if (i >= indexAwal && i < indexAkhir) {
//       result.push(data[i]);
//     }
//   }
//   return result;
// };
const slice = (data, index) => {
  const result = [];
  if (typeof index[1] === "undefined" && index[1] === null)
    index[1] = data.length;
  if (typeof index[0] === "undefined" && index[0] === null) index[0] = 0;
  for (let i = index[0]; i < data.length; i++) {
    result.push(data[i]);
  }
  return result;
};

console.log(slice(["ant", "bison", "camel", "duck", "elephant"], [2]));
console.log(slice(["ant", "bison", "camel", "duck", "elephant"], [2, 4]));
console.log(slice(["ant", "bison", "camel", "duck", "elephant"], [1, 5]));
console.log(slice(["ant", "bison", "camel", "duck", "elephant"], []));
console.log(slice(["ant", "bison", "camel", "duck", "elephant"], [20]));
