// Buatlah script untuk menentukan suatu angka merupakan bilangan ganjil atau genap.

function ganjilGenap(a) {
  let hasil = "";
  if (a % 2 == 0) {
    hasil = a + " Adalah Bilangan Genap";
  } else {
    hasil = a + " Adalah Bilangan Ganjil";
  }
  console.log(hasil);
}
ganjilGenap(2);
