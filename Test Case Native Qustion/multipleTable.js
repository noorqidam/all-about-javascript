/**
 * ? Multiple Table
 * ? ==============
 *
 * TODO: [INSTRUCTIONS]
 *  Diberikan sebuah array multidimensi yang berisikan angka -angka pada sisi atas table kiri nya.
 *  tugas kalian adalah dapat mengalikan angka -angka tersebut sesuai dengan koordinatnya.
 *
 * TODO: [EXAMPLES]
 * input :
 * [
 *  [0,1,2,3,4],
 *  [5,0,0,0,0],
 *  [6,0,0,0,0],
 *  [7,0,0,0,0],
 *  [8,0,0,0,0],
 * ]
 *
 * proses:
 * pertama, untuk mengetahui cara perhitungan angka -angka 0 yang belum diketahui hasilnya perkaliannya.
 * kita umpamakan mereka seperti variable:
 * [
 *  [0,1,2,3,4],
 *  [5,a,b,c,d],
 *  [6,e,f,g,h],
 *  [7,i,j,k,l],
 *  [8,m,n,o,p],
 * ]
 *
 * untuk mengetahui nilai a , maka kalikan dengan 5, maka:
 * a = 5
 * b = 5 * 2
 * c = 5 * 3
 * d = 5 * 4
 * e = 6 * 5
 * dst
 *
 * sehingga output nya:
 * [
 *  [0,1,2,3,4],
 *  [5,5,10,15,20],
 *  [6,6,12,18,24],
 *  [7,7,14,21,28],
 *  [8,8,16,23,32],
 * ]
 * TODO: [RULES]
 * 1. hanya boleh menggunakan .push() dan unshift()
 * 2. Dilarang menggunakan method REGEX
 */

const multipleTable = (table) => {
  for (let i = 1; i < table.length; i++) {
    for (let j = 1; j < table[i].length; j++) {
      table[i][j] = table[0][j] * table[i][0];
    }
  }
  return table;
};

console.log(
  multipleTable([
    [0, 1, 2, 3, 4],
    [5, 0, 0, 0, 0],
    [6, 0, 0, 0, 0],
    [7, 0, 0, 0, 0],
    [8, 0, 0, 0, 0],
  ])
);

console.log(
  multipleTable([
    [0, 3, 5, 7, 9],
    [2, 0, 0, 0, 0],
    [4, 0, 0, 0, 0],
    [6, 0, 0, 0, 0],
    [8, 0, 0, 0, 0],
  ])
);
