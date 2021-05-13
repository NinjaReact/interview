//Let можно менять

let a = 'Variable a'
let b = 'Variable b'

{
    a = 'New Variable a'
    let b = 'Local Variable b'
    console.log('Scope A', a)
    console.log('Scope B', b)
}
console.log('NoScope A', a)
console.log('NoScope B', b)


//const 

// const port = 8080
// port = 20


const array = ['js' , 'is' , 'awesome']
array.push('!')