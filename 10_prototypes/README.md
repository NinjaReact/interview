# prototype

**каждый объект имеет свой прототип который берется от род объекта, от которого он был создан**

**__proto__ - от кого наследуется**
**Object.getPrototepeOf() - узнать от кого наследуется объект**

**Создаем класс , прототипом добавляем в него функцию voice(Cat.prototype.voice)**
```javascript
function Cat(name , color) {
    this.name = name
    this.color = color
}

Cat.prototype.voice = function () {
    console.log(`cat ${this.name} say myay`)
}
//cat Kat say myay ↓
cat.voice()

//Cat { voice: [λ] } ↓
console.log(Cat.prototype)

//Cat { name: 'Kat', color: 'white' }  ↓
console.log(cat)

//Cat { voice: [λ] } ↓
console.log(cat.__proto__)

//true ↓
console.log(cat.__proto__ === Cat.prototype)

// От кого наследуется [λ: Cat] ↓
console.log(cat.constructor)
```

**Собственные свойства объектов или свойства доступные в прототипе ↓**

```javascript
function Person() {
    Person.prototype.legs = 2
    Person.prototype.skin = 'white'
}

const person = new Person()
person.name = 'Vladilen'

console.log('skin' in person) // Есть ли skin в Person - true
console.log(person.legs) //2
console.log(person.name) //Vladilen

```
---
**hasOwnProperty() - есть ли переменная в классе или она в прототипе **

```javascript
// true - так rfr  мы сделали прототип person и только потом добавили поле name  
console.log(person.hasOwnProperty('name')) 

//false - так как поле name уже было в классе
console.log(person.hasOwnProperty('skin'))
```
---
**Создание прототипа**

```javascript
const proto = {year : 2021} //proto стало прототипом
const myYear = Object.create(proto)

console.log(myYear.year) //2021
console.log(myYear.hasOwnProperty('year')) //false
console.log(myYear.__proto__ === proto ) //true1    
```
---

**Если пометь прототип то поменяется значения и в его дочернем объекте**
```javascript
proto.year = 2022
console.log(myYear.year) // 2020
```
---

**Так не поменяется объект ?**
``` javascript
proto ={ year : 999}
```