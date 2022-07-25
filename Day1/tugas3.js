// Buatlah script untuk menentukan suatu tahun merupakan tahun kabisat atau bukan.

function tahunKabisat(a) {
  let tahun = "";
  if ((0 == a % 4 && 0 != a % 100) || 0 == a % 400) {
    tahun = a + " Adalah Tahun Kabisat";
  } else {
    tahun = a + " Adalah Bukan Tahun Kabisat";
  }
  console.log(tahun);
}
tahunKabisat(2000);
