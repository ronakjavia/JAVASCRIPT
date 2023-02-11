for (let a = 0; a <= 100; a++) {
  fact = 0
  for (let b = 0; b <= 100; b++) {
    if (a % b == 0) {
      fact++
    }
  }
  if (fact == 2) {
    console.log('Prime Numbers : ', a)
  }
}
