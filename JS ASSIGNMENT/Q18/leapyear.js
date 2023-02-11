function daysInAMonth(year, month) {
  const days = new Date(year, month, 0).getDate()
  return days
}

console.log(daysInAMonth(2000, 4))
