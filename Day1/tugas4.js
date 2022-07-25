// Buatlah script untuk menentukan rating suatu film, dengan ketentuan sebagai berikut:

// Jika usia yang dimasukkan lebih atau sama dengan 21, maka rating film adalah DEWASA.
// Jika usia yang dimasukkan lebih atau sama dengan 13, maka rating film adalah REMAJA.
// Jika usia yang dimasukkan lebih atau sama dengan 9, maka rating film adalah BIMBINGAN ORANG TUA.
// Jika usia yang dimasukkan kurang dari 9, maka rating film adalah SEMUA USIA.

function ratingFilm(umur) {
  let film = "";
  if (umur >= 21) {
    film = "Dewasa";
  } else if (umur >= 13) {
    film = "Remaja";
  } else if (umur >= 9) {
    film = "Bimbingan Orang Tua";
  } else if (umur < 9) {
    film = "Semua Usia";
  }
  console.log(film);
}

ratingFilm(30);
