function Cat(name , color) {
    this.name = name
    this.color = color
}

Cat.prototype.voice = function () {
    console.log(`cat ${this.name} say myay`)
}

const cat = new Cat('Kat' , 'white')

cat.voice()

console.log(Cat.prototype)
console.log(cat)
console.log(cat.__proto__)
console.log(cat.__proto__ === Cat.prototype)
console.log(cat.constructor)


// ===

function Person() {
    Person.prototype.legs = 2
    Person.prototype.skin = 'white'
}

const person = new Person()
person.name = 'Vladilen'

console.log('skin' in person)
console.log(person.legs)
console.log(person.name)

console.log(person.hasOwnProperty('name'))
console.log(person.hasOwnProperty('skin'))

//===

const proto = {year : 2021} //proto стало прототипом
const myYear = Object.create(proto)

console.log(myYear.year)
console.log(myYear.hasOwnProperty('year'))
console.log(myYear.__proto__ === proto )

proto.year = 2022

console.log(myYear.year)