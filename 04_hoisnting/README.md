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

**Пример 2**

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