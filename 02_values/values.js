let firstlet = 42
let seccondlet = firstlet
seccondlet++
console.log('firstlet' , firstlet)  // firstlet 42
console.log('seccondlet' , seccondlet)  // seccondlet 43 

let arrayOne = [1 , 2 , 3]
let arrayTwo = arrayOne

let arrayConcat = arrayOne.concat()
arrayTwo.push(4)

console.log('arrayOne' , arrayOne)
console.log('arrayTwo' , arrayTwo)

let coppy = [1 , 2 , 3 , 4]

console.log(arrayOne === arrayTwo)
console.log(arrayOne === coppy)
