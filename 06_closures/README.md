# Замыкания

**Замыкания это моммент когда функция имеет доступ к перменным из выше стоящего scope**
*называют функция в функции , когда функция замыкает в себе значения из scope выше*
*функция которая ничего не возвращает undefined*

```javascript
function sayHelloTo(name) {
    const message = 'Hello' + name
    return function () {
        console.log(message)
    }
}
```

---

**Замыкаем name = Elena ↓**
```javascript
const helloToElena = sayHelloTo('Elena')
```

---

**Выведет на экран (функция) ↓**

```javascript
console.log(helloToElena)
```

---

**После того как мы замкнули 'Elena' в функции sayHelloTo() , helloToElena() - стала функциеей и при ее вызове срабатывает return  функции sayHelloTo() ,  и на экран выводится message**
```javascript
function sayHelloTo(name) {
    const message = 'Hello' + name
    return function () {
        console.log(message)
    }
}
const helloToElena = sayHelloTo('Elena')
helloToElena()
```

---

**Пример 2**

```javascript
function createFrameworkManager() {
    const fw = ['angular' , 'react']
    return {
        print : function() {
            console.log(fw.join(' '))
        },
        add : function(framework){
            fw.push(framework)
        }

    }
}

const manager = createFrameworkManager()
console.log(manager)
manager.print()
manager.add('vue')
manager.print()
```

**createFrameworkManager :**
* fw - массив
* return объекта с функциями
* print() - выводит на экран все замкнутые значения массива fw
* add() - добавляет в массив новый элемент (Элементы только для этого пользователя) 

---

**Очень странная механика**

```javascript
const fib = [1 ,  2 , 3  , 5 , 8 , 13]

for(var i = 0; i < fib.length ; i++){
    setTimeout(function () {
        console.log(`fib[${i}] = ${fib[i]}`)
    } , 1500)
}
```
**Выведет :**
* fib[6] = undefined
* fib[6] = undefined
* fib[6] = undefined
* fib[6] = undefined
* fib[6] = undefined
* fib[6] = undefined

**цикл фор срабатывает быстрее setTimeout и когда цикл доходит до :**
```javascript
for(var i = 6; 6 < fib.length; i++){}
```
**так как длина массива 6 (6 < 6) то цикл должен закончиться но вместо этого записывается 6**
**6  элемента нету и поэтому undefined**

---

**Как решать проблему ? Поменять var на let**
**так как let работает в блочном scope**
```javascript
for(let i = 0; i < fib.length ; i++)
```
---
**Или использовать замыкания**

**Делаем анонимную функцию и передаем в нее параметр i (замыкая его) , в 1 скобки вы поместим наш setTimeOut**
```javascript
for(var i = 0; i < fib.length ; i++){
    ()(i)
}
```
---

**итоговый вариант где j = i↓**
```javascript
for(var i = 0; i < fib.length ; i++){
    (function(j){
        setTimeout(function () {
            console.log(`fib[${j}] = ${fib[j]}`)
        } , 1500)  
    })(i)
}
```