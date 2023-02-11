const countries1 = ['India', 'Ethiopia', 'Canada', 'Austria']
const countries2 = ['India', 'England', 'Canada', 'Austria']

if (countries1.includes('Ethiopia')) {
  console.log('ETHIOPIA')
} else {
  countries1.push('Ethiopia')
  console.log(countries1)
}

if (countries2.includes('Ethiopia')) {
  console.log('ETHIOPIA')
} else {
  countries2.push('Ethiopia')
  console.log(countries2)
}
