const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

// Task 1
if (shoppingCart.includes('Meat')) {
  console.log('Meat is already present')
} else {
  shoppingCart.unshift('Meat')
  console.log(shoppingCart)
}

// Task 2
if (shoppingCart.includes('Sugar')) {
  console.log('Sugar is already present')
} else {
  shoppingCart.push('Sugar')
  console.log(shoppingCart)
}

// Task 3
const removeHoney = shoppingCart.splice(4, 1)
console.log(removeHoney)

// Task 4
const index = shoppingCart.indexOf('Tea')
shoppingCart[index] = 'Green Tea'
console.log(shoppingCart)
