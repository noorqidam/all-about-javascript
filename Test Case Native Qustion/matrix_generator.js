/**
 * ? Matrix Generator
 * ? ================
 *
 * TODO: [Description]
 * 1. Matrix Generator merupakan sebuah fungsi yang menerima input berupa string
 * 2. Fungsi akan mengembalikan sebuah array multidimensi dengan ukuran angka yang sama (1X1, 2X2, 3X3, ...dst)
 * 3. Ukuran dari array multidimensi tersebut ditentukan dari jumlah karakter yang ada di input
 *    sehingga array result yang bentuknya persegi (ukuran x ukuran) memuat seluruh karakter pada input
 * 4. Array akan diisi pada parameter string dan bintang/star('*').
 * 5. Karakter bintang/star ('*') diisi sesuai dengan jumlah elemen kosong dan mulai ditulis pada bagian awal array
 *
 * TODO: [Contoh]
 * @input = 'abcdefgh'
 * jumlah karakter = 8
 * maka ukuran 3 => 3*3 = 9
 *
 * TODO: Kenapa ukuran 3?
 * Karena jika ukuran 2*2 terlalu kecil (total = 4, hanya muat 'abcd')
 *
 * Ukuran adalah 3*3 = 9 dikurangi panjang karakter 8 = 1
 * MAKA elemen kosong akan ada 1, Tulislah karakter bintang/star mulai dari index pertama sebanyak 1 kali
 * Jika jumlah elemen kosong sudah habis, maka baru menuliskan string dari parameter
 *
 * @output =
 * [
 *  [ '*', 'a', 'b' ],
 *  [ 'c', 'd', 'e' ],
 *  [ 'f', 'g', 'h' ],
 * ]
 */

/**
 *
 * TODO: [Contoh 2]
 * @input = 'p23f4793847f9834jd983274t0'
 * jumlah karakter = 26
 * maka ukuran 6 => 6*6 = 36
 *
 * TODO: Kenapa ukuran 6?
 * Karena jika ukuran 5*5 terlalu kecil (total = 25, hanya muat 'p23f4793847f9834jd983274t')
 * dan jika ukuran 7*7 terlalu besar
 *
 * ukuran adalah 6*6 = 36 dikurangi panjang karakter 26 = 10,
 * MAKA elemen kosong akan ada 10, TULISLAH karakter bintang/start mulai dari awal sebanyak 10 kali
 * jika jumlah elemen kosong sudah habis, maka baru menuliskan string dari parameter
 *
 * @output =
 * [
 *  [ '*', '*', '*', '*', '*', '*' ],
 *  [ '*', '*', 'p', '2', '3', 'f' ],
 *  [ '4', '7', '9', '3', '8', '4' ],
 *  [ '*', '*', '7', 'f', '9', '8' ],
 *  [ '3', '2', '7', '4', 't', '0' ],
 * ]
 *
 * TODO: [RULES]
 * 1. Hanya boleh menggunakan built-in function .push() dan .unshift
 * 2. Diperbolehkan menggunakan built-in function Math
 */

const matrixGenerator = (str) => {
  let result = [];
  let jumlahArr = 1;
  for (let h = 1; h < str.length; h++) {
    if (h * h >= str.length) {
      jumlahArr = h;
      break;
    }
  }

  let selisih = jumlahArr * jumlahArr - str.length;
  let indexStr = 0;
  for (let i = 1; i <= jumlahArr; i++) {
    let tempArr = [];
    for (let j = 1; j <= jumlahArr; j++) {
      if (tempArr.length + 1 < jumlahArr) {
        if (selisih > 0) {
          tempArr.push("*");
          selisih--;
        } else {
          tempArr.push(str[indexStr]);
          indexStr++;
        }
      } else {
        result.push(tempArr);
        if (selisih > 0) {
          tempArr.push("*");
          selisih--;
        } else {
          tempArr.push(str[indexStr]);
          indexStr++;
        }
      }
    }
  }
  return result;
};

console.log(matrixGenerator("abcdefgh"));
