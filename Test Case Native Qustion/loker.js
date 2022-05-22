/**
 *
 * ? Mencari No Loker di Lantai
 * ? ==========================
 *
 * TODO: [Description]
 * Ada sebuah gedung dengan lantai tidak terbatas. Di dalam setiap lantai ada sejumlah loker dengan nomer loker berurutan,
 * dengan konfigurasi sebagai berikut:
 * Lt. 1 tersedia 9 buah loker, nomor 1-9
 * Lt. 2 tersedia 3 buah loker, nomor 10-12
 * Lt. 3 tersedia 7 buah loker, nomor 13-19
 * Lt. 4 tersedia 2 buah loker, nomor 20-21
 * Lt. 5 tersedia 9 buah loker, nomor 22-30
 * Lt. 6 tersedia 3 buah loker, nomor 31-33
 * Lt. 7 tersedia 7 buah loker, nomor 34-40
 * Lt. 8 tersedia 2 buah loker, nomor 41-42
 * dst
 *
 * TODO: [Instruction]
 * Buatlah sebuah fungsi yang menerima parameter nomor loker, dan mengembalikan angka lantai
 */

const floorNumber = (lockerNumber) => {
  let lockerSum = 1;
  let arrayIndex = 0;
  const lockerArray = [9, 3, 7, 2];

  for (let i = 1; i; i++) {
    lockerSum += lockerArray[arrayIndex];
    if (lockerSum > lockerNumber) {
      return i;
    }

    if (arrayIndex !== lockerArray.length - 1) {
      arrayIndex++;
    } else {
      arrayIndex = 0;
    }
  }
};
console.log(floorNumber(20));
