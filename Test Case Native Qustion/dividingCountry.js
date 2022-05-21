/**
 * ? Kumpulan Negara
 * ? ================
 *
 * TODO: [Instruction]
 * Buatlah sebuah fungsi yang akan mengembalikan kumpulan-kumpulan nama negara.
 * Yang dikelompokan sesuai dengan benua negara-negara tersebut berada
 *
 * TODO: [Description]
 * 1. Function menerima parameter berupa array multidimensional yang masing-masing
 *    elemennya berisi array dari nama negara dan benuanya
 * 2. Funtion akan mengembalikan multidimensional Array yang dikelompokan sesuai dengan benua dari masing-masing negara.
 * Contoh:
 * @result = [
 *  ['Amerika','Kanada','Mexico',...],
 *  ['Asia', ...],
 *  ['Afrika',...],
 *  ['Eropa'...]
 * ]
 * Dimana ... merupakan nama-nama negara.
 *
 * TODO: [Rules]
 * 1. tidak boleh menggunakan built in function kecuali .push() dan unshift()
 */

const countryCollection = (countries) => {
  let copyCountries = countries.slice();
  let result = [];
  for (let i = 0; i < countries.length; i++) {
    if (copyCountries[i]) {
      let tempArr = [copyCountries[i][1]];
      for (let j = 0; j < copyCountries.length; j++) {
        if (copyCountries[j] && countries[i][1] === copyCountries[j][1]) {
          tempArr.push(copyCountries[j][0]);
          copyCountries[j] = undefined;
        }
      }
      result.push(tempArr);
    }
  }
  return result;
};

console.log(
  countryCollection([
    ["Barbados", "Amerika"],
    ["Oman", "Asia"],
    ["Gibraltar", "Eropa"],
    ["Malaysia", "Asia"],
    ["Suriname", "Amerika"],
    ["Mayotte", "Afrika"],
    ["Turkmenistan", "Asia"],
    ["Austria", "Eropa"],
    ["Somalia", "Afrika"],
  ])
);

console.log(
  countryCollection([
    ["Bhutan", "Asia"],
    ["Comoros", "Afrika"],
    ["Botswana", "Afrika"],
    ["Iceland", "Eropa"],
    ["Lesotho", "Afrika"],
    ["Liechtenstein", "Eropa"],
    ["Malawi", "Afrika"],
    ["Algeria", "Afrika"],
    ["Azerbaijan", "Asia"],
    ["Indonesia", "Asia"],
    ["Andorra", "Asia"],
    ["Armenia", "Asia"],
  ])
);
