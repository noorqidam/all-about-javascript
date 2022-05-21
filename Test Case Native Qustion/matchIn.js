/**
 * ? MatchIn
 * ? ========
 *
 * TODO: [Description]
 * matchIn merupakan sebuah function yang menerima data berupa object pelamar ( @applicant )
 * dan mengembalikan sebuah array berisi perusahaan apa saja yang memenuhi kualifikasi
 * pelamar tersebut dan skill apa saja yang sesuai dengan kebutuhan perusahaan  yang dilamar
 *
 * Berikut ada alah data dari masing-masing perusahaan:
 * | Company Name | Required Skills                         |Job Experience (years) |
 * | - - - - - -  | - - - - - - - - - - - - - - - - - - - - | - - - - - - - - - - - |
 * | PT XYZ       | XML, Kotlin, PHP, C++, Javascript, HTML |            4          |
 * | PT ABC       | Python, HTML, PHP                       |            3          |
 * | PT HIJ       | C++, Javascript                         |            2          |
 * | PT KLM       | Golang, Javascript, JQuery              |            2          |
 * | PT JKL       | Python, HTML, PHP                       |            8          |
 *
 * Adapun kriteria minimal yang dibutuhkan pelamar untuk memenuhi kualifikasi adalah:
 * 1. Memiliki minimal 2 skill yang sama dengan perusahaan
 * 2. Memiliki pengalaman kerja yang sama/lebih besar dari perusahaan
 *
 * TODO [Example]
 * @applicant = {
 *  name: 'Yusuf',
 *  skills: ['Javascript', 'C++'],
 *  experience: 2
 * }
 *
 * Penjelasan:
 * 1. Tidak masuk PT XYZ => pengalaman < 4 tahun
 * 2. Tidak masuk PT ABC => tidak memiliki skill yang cocok dan pengalaman < 3 tahun
 * 3. Masuk PT HIJ => memiliki skill yang cocok (C++, Javascript) dan pengalamn 2 tahun
 * 4. Tidak masuk PT KLM => hanya memiliki skill Javascript
 * 5. Tidak masuk PT JKL => hanya memiliki skill HTML dan pengalaman < 8 tahun
 *
 * Maka:
 * @Output = [
 *  {
 *    companyName: 'PT HIJ',
 *    matchedSkills: ['C++', 'Javascript']
 *  }
 * ]
 *
 * TODO: [Rules]
 * 1. tidak boleh menggunakan built in function kecuali .push() dan unshift()
 */

const matchIn = (applicant) => {
  let result = [];
  let companies = [
    {
      company_name: "PT XYZ",
      required_skills: ["XML", "Kotlin", "PHP", "C++", "Javascript", "HTML"],
      exp: 4,
    },
    {
      company_name: "PT ABC",
      required_skills: ["Python", "HTML", "PHP"],
      exp: 3,
    },
    {
      company_name: "PT HIJ",
      required_skills: ["C++", "Javascript"],
      exp: 2,
    },
    {
      company_name: "PT KLM",
      required_skills: ["Golang", "Javascript", "JQuery"],
      exp: 2,
    },
    {
      company_name: "PT JKL",
      required_skills: ["Python", "HTML", "PHP"],
      exp: 8,
    },
  ];

  for (let i = 0; i < companies.length; i++) {
    let matchSkills = [];
    for (let j = 0; j < applicant.skills.length; j++) {
      for (let k = 0; k < companies[i].required_skills.length; k++) {
        if (
          applicant.experience >= companies[i].exp &&
          applicant.skills[j] === companies[i].required_skills[k]
        ) {
          matchSkills.push(applicant.skills[j]);
        }
      }
    }
    if (matchSkills.length >= 2) {
      result.push({
        companyName: companies[i].company_name,
        matchSkills: matchSkills,
      });
    }
  }
  return result.length === 0 ? "You are unqualified!" : result;
};

const applicant1 = {
  name: "Alpha",
  skills: ["Android", "Kotlin", "XML", "Python", "PHP"],
  experience: 5,
};
console.log(matchIn(applicant1));

const applicant2 = {
  name: "Beta",
  skills: ["PHP", "HTML", "CSS", "JQuery", "Python"],
  experience: 1,
};
console.log(matchIn(applicant2));

const applicant3 = {
  name: "Charlie",
  skills: ["HTML", "Photoshop", "CSS", "Javascript"],
  experience: 7,
};
console.log(matchIn(applicant3));

const applicant4 = {
  name: "Delta",
  skills: ["Python", "PHP", "C++", "Javascript"],
  experience: 3,
};
console.log(matchIn(applicant4));
