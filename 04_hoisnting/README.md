# Hoisting

**При интерпретации файла перемешает определение некоторых функци и тд в начало кода**

**Пример 1. Вызов функции до ее определения**
```javaScript
console.log(sum(1 , 2))

function sum(a , b){
    return a + b
}
```

---

**Пример 2. вызов переменной до ее объявления**

```javascript
console.log(i) // undefined

var i = 42

console.log(i) // 42
```

**Пример 3. объявили переменную , но не задали ей значение**

```javascript
var i
console.log(i) // undefined 
i = 42
console.log(i) // 42
```

**Перменные const и let не подвержены hoisting**
*будет ошибка*
```javascript
console.log(num)
const num = 42
console.log(num)
```


**Function Declaration :**

*Можно вызвать до объяления и функция сработает*

```javascript
console.log(square(25))
function square(num){
    return num ** 2
}
```
---

**Function Expression :**

*Если вызвать до обяввления , то выдаст ошибку*

```javascript
console.log(sqe(25))
var sqe = function (num){
    return num **2
}
```
---