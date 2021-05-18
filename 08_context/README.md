# Контекст

**Контекст определяет как функция была вызвана и он указваает на this и (bind и тд)**

**function создает свой контекст**

**Объект который с 2 полями**

```javascript
const person = {
    surname : 'Stark',
    knows : function (what , name) {
        console.log(`Ты ${what} знаешь , ${name} ${this.surname}`)
        //Ты все знаешь , Bran Stark 
    }
}

const john = { surname : 'Snoy'}
```
---

**Привязываем другйо контекст↓**
```javascript
//все знаешь , Bran Stark  ↓
person.knows('все' , 'Bran') 

//Ты ничего не знаешь , John Snoy  ↓
person.knows.call(john , 'ничего не' , 'John')
person.knows.call(john , ...['ничего не' , 'John'])

const bound = person.knows.bind(john , 'ничего не' , 'John')
bound()
//Ты ничего не знаешь , John Snoy  ↓
```
---
**Создание класса**

```javascript
function Person(name , age) {
    this.name = name
    this.age = age

    console.log(this)
    //Person { name: 'Elena', age: 20 } 
}

const elena = new Person('Elena' , 20)

```
---
**Примеры с контекстом ↓**
```javascript
function logThis() {
    console.log(this)
}

const obj ={num : 42}

//{ num: 42 } ↓
logThis.apply(obj)
logThis.call(obj)
logThis.bind(obj)()
```
---
**Еще 1 пример контекста ↓**
```javascript
const animal = {
    legs : 4,
    logThis :function() {
        console.log(this) //{ legs: 4, logThis: [λ: logThis] } 
    }
    
}
animal.logThis()
```
---
**Контекст и стрелочные функции ???**
```javascript
function Cat (color){
    this.color = color

    console.log('This' , this);
    //This Cat { color: 'red' } 
    (()=> console.log('Arrow this' , this))() //Arrow this Cat { color: 'red' } 
}
new Cat('red')
```