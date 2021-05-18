# Async
**Js работает в 1 потоке и с асинхронностью все плохо , но появился eventLoop**

**создаем функции**
```javascript
const first = () => console.log('First')
const second = () => console.log('Second')
const thrid = () => console.log('Thrid')
```

---

**Вызываем функции ↓**
```javascript
    first()
    second()
    thrid()
```
**Вывод :**
* First
* Second
* Thrid

---

**Вывод с setTimeot()**

```javascript
first()
setTimeout(second, 0)
thrid()
```
**Вывод :**
* First ​​​​​
* Thrid ​​​​​
* Second ​​​​​

**Как это работает ? :**

* интерпретатор доходит до строчки first() и отправляет ее в callStack
* функция first выполняется и интрепритотор убирает ее из callStack(он стал пустым)
* доходит до setTimeout ,  заносит в setTimeout Second 
* заносит setTimeout в callStack , видит что setTimeout функция браузерного api , пердает setTimeout в сторонний api и очищает callStack
* интерпретатор доходит до строчки thrid() и отправляет ее в callStack
* функция thrid выполняется и интрепритотор убирает ее из callStack(он стал пустым)
* крогда интерпретатор прошелся по всему коду видит setTimeOut и помещает его в callbackQ и eventLopp отправляет функцию Second в callStack и она срабатывает 
---