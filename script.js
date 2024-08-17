const body = document.body
// const div = document.createElement("div") //creating an element

// div.innerText = "hello world"

// body.append(div)

// const div = document.querySelector('div')
// console.log(div.textContent)
// console.log(div.innerText)

// const strong = document.createElement('strong')
// strong.innerText = 'Hello world'
// div.append(strong)

// body.append(div)

//***Accessing by id ****//
const div = document.querySelector('div')
const span1 = document.querySelector('#hi')
const span2 = document.querySelector('#bye')

console.log(span1.getAttribute('id')) //get attribute
console.log(span1.setAttribute('title','hi')) //set attribute

// div.removeChild(span2); //removing attribute
// span1.remove()
// div.append(span1)
span1.removeAttribute('title')
console.log(span2.dataset)

//span1.classList.remove('class1')
span1.classList.toggle('class3','class1')
