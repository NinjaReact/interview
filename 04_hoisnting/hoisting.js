// Вызов функции до ее объявления

console.log(sum(1 , 2))

function sum(a , b){
    return a + b
}


// var  Пример 1

console.log(i) // undefined

var i = 42

console.log(i) // 42



//var Пример 2 

var i
console.log(i) // undefined 
i = 42
console.log(i) // 42

// const and let 

// console.log(num)
// const num = 42
// console.log(num)

//Function Declaration
console.log(square(25))
function square(num){
    return num **2
}


//Function Expression

var sqe = function (num){
    return num **2
}