/**
 * ? Mengumpulkan Point Belanja
 * ? ==========================
 *
 * TODO: [Description]
 * Ibu sedang mengumpulkan point belanja dan kita diminta membantunya.
 * Dari list yang ingin ibu beli, yang sudah ibu urutkan dari pentingnya
 * barang itu, kumpulkanlah sebanyakl mungkin point belanja dengan modal yang diberikan.
 *
 * TODO: [Ketentuan]:
 * 1. Ketika membeli sebuah barang, selagi masih ada uang untuk membeli barang tersebut, maka beli sampai uang tidak dapat membeli barang itu lagi.
 *
 * Daftar Harga Barang
 * | Nama        | Harga        |Point|
 * | - - - - - - | - - - - - -  | - - |
 * | Kompor      | Rp 1.000.000 | 100 |
 * | Daging Sapi | Rp   300.000 |  95 |
 * | Bantal      | Rp    25.000 |  50 |
 * | Shampoo     | Rp    20.000 |  40 |
 * | Sabun       | Rp    10.000 |  20 |
 *
 * TODO: [Rules]
 * 1. tidak boleh menggunakan built in function kecuali .push() dan unshift()
 */

const belanja = (modal) => {
  let result = {
    belanja: {},
    point: 0,
    kembalian: modal,
  };

  let products = [
    { nama_barang: "Kompor", harga: 1000000, point: 100 },
    { nama_barang: "Daging Sapi", harga: 300000, point: 95 },
    { nama_barang: "Bantal", harga: 25000, point: 50 },
    { nama_barang: "Shampoo", harga: 20000, point: 40 },
    { nama_barang: "Sabun", harga: 10000, point: 20 },
  ];

  for (let i = 0; i < products.length; i++) {
    if (result.kembalian >= products[i].harga) {
      if (!result.belanja[products[i].nama_barang]) {
        result.belanja[products[i].nama_barang] = 0;
      }
      let qtyBeli = (result.kembalian / products[i].harga).toFixed(0);
      result.belanja[products[i].nama_barang] = qtyBeli;

      result.kembalian -= qtyBeli * products[i].harga;
      result.point += qtyBeli * products[i].point;
    }
  }
  return result;
};

console.log(belanja(100000));
console.log(belanja(1000000));
console.log(belanja(1150500));
console.log(belanja(0));
