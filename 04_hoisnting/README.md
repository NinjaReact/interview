# Hoisting

**При интерпретации файла перемешает определение некоторых функци и тд в начало кода**

**Пример : вызов функции до ее определения**
```javaScript
console.log(sum(1 , 2))

function sum(a , b){
    return a + b
}
```