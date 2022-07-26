function rentangAngka(awal, akhir) {
  var range = [];
  for (let i = awal; i <= akhir; i++) {
    range.push(i);
  }
  return range;
}

console.log(rentangAngka(4, 8));
