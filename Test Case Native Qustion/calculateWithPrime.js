/**
 * ? Hitung Prima
 * ? ============
 *
 *
 * TODO: [Instruction]
 * Buatlah sebuah function untuk menghitung ada berapa angka prima dari angka 0 sampai @num
 * dimana @num adalah angka input yang diberikan sebagai parameter untuk function hitungPrima kita
 *
 * TODO: [Rules]
 * 1. `Wajib menggunakan rekursif`
 * 2. Dilarang menambah dan merubah tipe data parameter
 * 3. Dilarang membuat function lain selain hitungPrima
 * 4. Hanya diperbolehkan `menggunakan 1 loop`
 */

const hitungPrima = (num) => {
  if (num === 0 || num < 2) {
    return 0;
  } else {
    let isPrima = true;
    for (let i = 2; i < num; i++) {
      if (num % i === 0 && num !== i) {
        isPrima = false;
        break;
      }
    }
    return isPrima + hitungPrima((num -= 1));
  }
};

console.log(hitungPrima(1)); // 0
console.log(hitungPrima(2)); // 1 (karena 2 adalah prima)
console.log(hitungPrima(10)); // 4 (karena 2,3,5,7 adalah prima)
console.log(hitungPrima(20)); // 8 (karena 2,3,5,7,11,13,17,19 adalah prima)
