// Buatlah script untuk menentukan suatu nilai dengan ketentuan berikut:

// Jika nilai yang dimasukkan lebih besar dan sama dengan 90 maka output yang keluar adalah A.
// Jika nilai yang dimasukkan lebih besar dan sama dengan 80; dan lebih kecil dan sama dengan 89, maka output yang keluar adalah B.
// Jika nilai yang dimasukkan lebih besar dan sama dengan 70; dan lebih kecil dan sama dengan 79, maka output yang keluar adalah C.
// Jika nilai yang dimasukkan lebih besar dan sama dengan 60; dan lebih kecil dan sama dengan 69, maka output yang keluar adalah D.
// Jika nilai yang dimasukkan lebih kecil dan sama dengan 59 maka output yang keluar adalah E.

function nilaiUjian(a) {
  let hasil = "";
  if (a >= 90) {
    hasil = "A";
  } else if (a >= 80 && a <= 89) {
    hasil = "B";
  } else if (a >= 70 && a <= 79) {
    hasil = "C";
  } else if (a >= 60 && a <= 69) {
    hasil = "D";
  } else if (a <= 59) {
    hasil = "E";
  }
  console.log(hasil);
}

nilaiUjian(91);
