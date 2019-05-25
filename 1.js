var biodata = {
    nama: "Arfi Bintang",
    alamat: "Tangerang Selatan",
    Hobies: ["membaca", "social experiment", "berenang"],
    is_married: false,
    school: {
        highschool: "smk nusantara",
        university: "STMIK MITRA KARYA"
    },
    skills: {
        HTML: 60,
        javascript: 50,
        PHP: 50
    },

}

var test = JSON.stringify(biodata);

console.log(test)