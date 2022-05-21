/**
 * ? Hitung Char Recursive
 * ? =====================
 *
 * TODO: [Instruction]
 * Buatlah sebuah function dengan teknik recursive untuk menghitung berapa banyak kata yang memiliki
 * karakter spesial query yang diberikan
 *
 * TODO: [Example]
 * @words = ['satu', 'dua', 'tiga', 'empat', 'lima']
 * @query = 'at'
 * karena 'satu' dan 'empat' mengandung kata 'at' maka
 * @result = 2
 *
 * TODO: [Rules]
 * 1. Wajib menggunakan rekursif
 * 2.Dilarang menambahkan parameter baru
 * 3. Dilarang membuat variable di luar function countCharRecursive
 * 4. Dilarang mengubah tipe data parameter
 * 5. Tidak boleh menggunakan loop (for, while, forEach, map, filter, reduce)
 */

const countCharRecursive = (words, query) => {
  if (words.length === 0) {
    return 0;
  } else {
    let isQueryInWords = words[0].match(query);
    let hitung = 0;
    if (isQueryInWords) {
      hitung = 1;
    }
    return hitung + countCharRecursive(words.slice(1), query);
  }
};

console.log(
  countCharRecursive(["Anchor", "classic", "daring", "eager", "fearless"], "ar")
);
console.log(
  countCharRecursive(
    [
      "90125785123545",
      "balonku ada 35",
      "1 tahun ada 52 minggu",
      "35-infinite-fox",
    ],
    "35"
  )
);
console.log(
  countCharRecursive(["Old", "MacDonald", "had", "four", "farms"], "o")
);
console.log(countCharRecursive(["haha", "haha", "haha", "haha", "haha"], "ha"));
console.log(countCharRecursive([], "z"));
