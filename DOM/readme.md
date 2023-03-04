# **DOM ASSISGNMENT 1**

## **Task 1**
The user has to append a new element in the navigation menu names **Hire Me** after the **Projects**.

### **After Update**
![Output Image](./Assignment_1st/Task_1/task1Output.png)

### **Project Solution**
```js
const li = document.getElementsByTagName('li')
li[2].textContent = 'Projects'

const nav = document.querySelector('nav ul')
const li3 = document.createElement('li')
const txt = document.createTextNode('Hire me')
li3.appendChild(txt)
nav.appendChild(li3)
```

## **Task 2**
The user has to change placeholder.

### **After Update**
![Output Image](./Assignment_1st/Task_2/task2Output1.png)

### **Project Solution**
```js
const li = document.getElementsByTagName('li')
li[2].textContent = 'Projects'

const search = document.querySelector('div input')
search.placeholder = 'Search My Project'
```

## **Task 3**
The user has to change from **a Freelancer** to **an Employee** and from **National and International Client** to **iNeuron Intelligence Pvt Ltd.** .

### **After Update**
![Output Image](./Assignment_1st/Task_3/task3Output.png)

### **Project Solution**
```js
const li = document.getElementsByTagName('li')
li[2].textContent = 'Projects'

const span1 = document.querySelectorAll('span')
span1[2].innerText = 'an Employee'
span1[3].innerText = 'iNeuron Intelligence Pvt Ltd.'

```

## **Task 4**
The user has to change Img.

### **After Update**
![Output Image](./Assignment_1st/Task_4/task4Output1.png)

### **Project Solution**
```js
const li = document.getElementsByTagName('li')
li[2].textContent = 'Projects'

const img = document.querySelector('img')
img.style.width = '370px'
img.style.height = '370px'
img.src = 'HiteshSir.jpg'


```

## **Task 5**
The user has to append a new element in the navigation menu names **Hire Me** after the **Projects**.

### **After Update**
![Output Image](./Assignment_1st/Task_5/task5Output.png)

### **Project Solution**
```js
const li = document.getElementsByTagName('li')
li[2].textContent = 'Projects'

const btn1 = document.querySelector('section div div')
const btn2 = document.createElement('button')
const text = document.createTextNode('Support Me')
btn2.appendChild(text)
btn1.appendChild(btn2)

```

# **DOM ASSISGNMENT 2**

## **Task 1**
The user has to keep open last 3 paragraph.

### **After Update**
![Output Image](./Assignment_2nd/Task1/task1Output.png)

### **Project Solution**
```js
const li = document.getElementsByTagName('li')
li[2].textContent = 'Projects'

const bgc = document.querySelectorAll('div div h3')
for (let i = 0; i < bgc.length; i++) {
  bgc[i].style.backgroundColor = '#DADAF8'
}

const p = document.querySelectorAll('.accordian p')
for (let i = 2; i < p.length; i++) {
  p[i].style.display = 'flex'
}
```

## **Task 2**
The user has to append Skills and its details.

### **After Update**
![Output Image](./Assignment_2nd/Task2/task2Output.png)

### **Project Solution**

```js
const li = document.getElementsByTagName('li')
li[2].textContent = 'Projects'

const div = document.querySelector('.accordian-wrapper')
const div5 = document.createElement('div')
div5.className = 'accordian'

const h3_5 = document.createElement('h3')
const txt = document.createTextNode('Skills')
const p5 = document.createElement('p')
const text = document.createTextNode(
  'I posses a very good command over the Full Stack Development technologies like MERN whick can be seen in my work over the Github.',
)
h3_5.appendChild(txt)
p5.appendChild(text)
div5.appendChild(h3_5)
div5.appendChild(p5)
div.appendChild(div5)

const p = document.querySelectorAll('p')
p[4].style.display = 'flex'
```

# **DOM ASSISGNMENT 3**

## **Task 1**
The user has to change placeholder.

### **After Update**
![Output Image](./Assignment_3rd/task1Output.png)

### **Project Solution**
```js
const box = document.querySelector('.mainWrapper')
box.style.marginTop = '100px'

const input1 = document.querySelector('.enterName')
input1.placeholder = 'FSJS 2.0'

const input2 = document.querySelector('.enterMail')
input2.placeholder = 'fsjs@ineuron.ai'

const input3 = document.querySelector('.enterMessage')
input3.placeholder = 'Hello World'

const output1 = document.querySelector('.userName')
output1.placeholder = 'FSJS 2.0'

const output2 = document.querySelector('.userEmail')
output2.placeholder = 'fsjs@ineuron.ai'

const output3 = document.querySelector('.userMessage')
output3.placeholder = 'Hello World'

```

# **DOM ASSISGNMENT 4**

## **Task 1**
The user has to add Wizard Card.

### **After Update**
![Output Image](./Assignment_4th/Output/DOM%20P1%20SS.png)

### **Project Solution**
```js
const heroes = document.querySelectorAll('.one-third')
for (let i = 0; i < heroes.length; i++) {
  heroes[i].style.color = '#ffffff'
}

const changeColor = document.querySelectorAll('.clash-card__unit-stats')
const colors = [
  '#EC9B3B',
  '#EE5487',
  '#EE5487',
  '#F6901A',
  '#82BB30',
  '#4FACFF',
]

changeColor.forEach((hero, index) => {
  hero.style.backgroundColor = colors[index]
})

const archerName = document.querySelector('.archer div:nth-child(3)')
archerName.textContent = 'THe Archer'

const card = document.querySelectorAll('.clash-card')
for (let i = 0; i < card.length; i++) {
  card[i].style.width = '265px'
}

const description = document.querySelectorAll('.clash-card__unit-description')
for (let i = 0; i < description.length; i++) {
  description[i].style.fontSize = '11px'
}

const img = document.querySelectorAll('.clash-card__image img')
for (let i = 0; i < img.length; i++) {
  img[i].style.width = '320px'
}

const img1 = document.querySelectorAll('.clash-card__image')
for (let i = 0; i < img1.length; i++) {
  img1[i].style.height = '210px'
}
```

# **DOM ASSISGNMENT 5**

## **Task 1**
The user has to add 6th Card.

### **After Update**
![Output Image](./Assignment_5th/Output/DOM%20P2%20SS1.png)

### **Project Solution**
```js
document.body.style.margin = '0px 315px'
document.body.style.backgroundColor = 'black'

// navbar
document.querySelector('.navbar').style.backgroundColor = 'white'
document.querySelector('.navbar').style.padding = '10px 30px 15px'
document.querySelector('.nav-logo img').style.width = '180px'
document.querySelector('.nav-logo img').style.marginLeft = '20px'
const nav = document.querySelectorAll('.nav-link')
for (let i = 0; i < nav.length; i++) {
  nav[i].style.fontSize = '16px'
  nav[i].style.margin = '0px 3px'
}

const btn1 = document.lastElementChild.querySelector('.nav-center')
const btn2 = document.createElement('button')
btn2.className = 'btn'
const txt = document.createTextNode('Pro Subscription')
btn2.appendChild(txt)
btn1.appendChild(btn2)
btn2.style.border = 'none'
btn2.style.marginLeft = '-130px'

const btn = document.querySelectorAll('.btn')
for (let i = 0; i < btn.length; i++) {
  btn[i].style.fontSize = '15px'
  btn[i].style.padding = '8px 15px'
  btn[i].style.borderRadius = '2px'
}
// main
// creating card
const gallery = document.querySelector('.recipe-gallery')
const div6 = document.createElement('div')
div6.className = 'card'

const a6 = document.createElement('a')
a6.className = 'recipe-text'
a6.setAttribute('href', '#')

const img6 = document.createElement('img')
img6.className = 'recipe-img'
img6.setAttribute('src', './img/recipe-6.jpeg')
img6.setAttribute('width', '100%')
img6.setAttribute('height', '200px')
img6.setAttribute('alt', 'Receipe-6 Img')
a6.appendChild(img6)

const h5 = document.createElement('h5')
h5.className = 'recipe-name'
const txth5 = document.createTextNode('Manchurian')
h5.appendChild(txth5)
a6.appendChild(h5)

const p6 = document.createElement('p')
p6.className = 'recipe-disp'
const txtp6 = document.createTextNode('Prep : 25min | Cook : 35min')
p6.appendChild(txtp6)
a6.appendChild(p6)
div6.appendChild(a6)
gallery.appendChild(div6)

document.querySelector('.page').style.backgroundColor = 'white'
document.querySelector('.page').style.padding = '0px 20px'
document.querySelector('.hero-container img').style.height = '250px'
document.querySelector('.hero-container img').style.marginBottom = '-10px'
document.querySelector('.hero-text h1').style.fontSize = '40px'
document.querySelector('.hero-text h4').style.fontSize = '20px'
document.querySelector('.text-r').style.fontSize = '20px'
const lists = document.querySelectorAll('div a')
for (let i = 0; i < lists.length; i++) {
  lists[i].style.fontSize = '17px'
}
const cards = document.querySelectorAll('.card')
for (let i = 0; i < cards.length; i++) {
  cards[i].style.height = '200px'
}

const recipename = document.querySelectorAll('.recipe-name')
for (let i = 0; i < recipename.length; i++) {
  recipename[i].style.fontSize = '15px'
  recipename[i].style.marginTop = '-1px'
}

const recipedisp = document.querySelectorAll('.recipe-disp')
for (let i = 0; i < recipedisp.length; i++) {
  recipedisp[i].style.fontSize = '11px'
  recipedisp[i].style.marginTop = '3px'
}

const cardsImg = document.querySelectorAll('.recipe-img')
for (let i = 0; i < cardsImg.length; i++) {
  cardsImg[i].style.height = '150px'
}

// footer
document.querySelector('.page-footer').style.backgroundColor = 'white'
document.querySelector('.page-footer').style.padding = '20px 20px'
document.querySelector('.page-footer').style.fontSize = '13px'
document.querySelector('.page-footer').style.marginTop = '0px'
document.querySelector('.page-footer p').style.backgroundColor = 'black'
document.querySelector('.page-footer p').style.padding = '14px 0px'
document.querySelector('p a').textContent = 'Ronak Javia'
```

# **DOM ASSISGNMENT 6**

## **Task 1**
The user has to change logo.

### **After Update**
![Output Image](./Assignment_6th/Output/DOM%20P3%20SS-1.png)
![Output Image](./Assignment_6th/Output/DOM%20P3%20SS-2.png)

### **Project Solution**
```js
const logo = document.querySelector('header img')
logo.src = './assets/ineuron-logo.png'
```

# **DOM ASSISGNMENT 7**

## **Task 1**
The user has to remove language containing 2.0.

### **After Update**
![Output Image](./Assignment_7th/Output1.png)

### **Project Solution**
```js
const names = document.querySelectorAll('section div a')
for (let x of names) {
  if (x.textContent.includes('2.0')) {
    x.style.display = 'none'
  }
}
```

## **Task 2**
The user has to submit form and get that removed language.

### **After Update**
![Output Image](./Assignment_7th/Output2.png)

### **Project Solution**
```js
document.querySelector('form input').disabled = false
document.querySelector('form button').disabled = false

document.querySelector('form button').addEventListener('click', submit)
function submit(e) {
  for (let x of names) {
    if (x.textContent.includes('2.0')) {
      x.style.display = 'inline'
    }
  }
  e.preventDefault()
}
```

# **DOM ASSISGNMENT 8**

## **Task 1**
The user has to append hr tag and scroll it.

### **After Update**
![Output Image](./Assignment_8th/Output1.png)

### **Project Solution**
```js
const aside = document.querySelector('aside')

const hr = document.createElement('hr')
hr.className = 'hr-line'
aside.appendChild(hr)

const h2 = document.createElement('h2')
h2.className = 'new-head'
h2.textContent = 'This is my custom heading'
aside.appendChild(h2)

const p = document.createElement('p')
p.className = 'new-p'
p.textContent =
  'Private funding by VC firms is down 50% YOY. We take a look at what that means.'
aside.appendChild(p)

aside.style.overflow = 'scroll'

```

## **Task 2**
The user has to no change.

### **After Update**
![Output Image](./Assignment_8th/ass8.2-after.png)

## **Task 3**
The user has to toogle navbar.

### **After Update**
![Output Image](./Assignment_8th/ass8.3-after.png)

### **Project Solution**
```js
document
  .querySelector('.navbar-toggler')
  .setAttribute('data-toggle', 'collapse')
document
  .querySelector('.navbar-toggler')
  .setAttribute('data-target', '#navbarTogglerDemo01')
document.querySelector('.navbar-toggler').onclick = function () {
  document.querySelector('.list-btn').style.display = 'flex'
}
```

# **DOM ASSISGNMENT 9**

## **Task 1**
The user has to change title color.

### **After Update**
![Output Image](./Assignment_9th/ass9.1-after.png)

### **Project Solution**
```js
const title = document.querySelector('.caption h1')
title.style.color = '#DC143C'
title.style.fontFamily = 'snas'
```

## **Task 2**
The user has to change pointer and add to cart button color.

### **After Update**
![Output Image](./Assignment_9th/ass9.2-after.png)

### **Project Solution**
```js
const buy = document.querySelector('button')
buy.style.backgroundColor = '#DC143C'
buy.style.cursor = 'pointer'
```