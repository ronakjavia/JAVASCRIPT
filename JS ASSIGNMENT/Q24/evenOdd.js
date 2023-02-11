const odd = []
const even = []

for (let a = 0; a <= 100; a++) {
  if (a % 2 == 0) {
    even.push(a)
  }
  if (a % 2 == 1) {
    odd.push(a)
  }
}
console.log(even)
console.log(odd)
