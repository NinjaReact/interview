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