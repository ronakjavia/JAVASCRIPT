const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

// Sorting Array
const sort = ages.sort()
console.log('Sorted Ages : ', sort)

// Minimum Age
const min = sort[0]
console.log('Minimum Age : ', min)

// Maximum Age
const max = sort[sort.length - 1]
console.log('Maximum Age : ', max)

// Median Age
if (sort.length % 2 == 0) {
  let median1 = (sort[sort.length / 2] + sort[sort.length / 2 + 1]) / 2
  console.log('Median Age : ', median1)
} else if (sort.length % 2 == 1) {
  let median2 = sort[(sort.length + 1) / 2]
  console.log('Median Age : ', median2)
}
