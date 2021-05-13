console.log(typeof 0)
console.log(typeof true)
console.log(typeof 'javascript')
console.log(typeof indefined)
console.log(typeof Math)
console.log(typeof Symbol('js'))
console.log(typeof function(){})
console.log(typeof Nan)


let language = 'JavaScript'
if(language){
    console.log('thebest lan is' , language)
}

console.log(Boolean(0))
console.log(Boolean(''))
console.log(Boolean(null))
console.log(Boolean('Hello'))
console.log(Boolean(' '))
console.log(Boolean('0'))
console.log(Boolean({}))
console.log(Boolean([]))
console.log(Boolean(function(){}))



//Строки :

console.log(1 + '2')
console.log('' + 1 + 0)
console.log('' - 1 + 0)
console.log('3' * '8')
console.log(4 + 10 + 'px')
console.log('px' + 5 + 10)
console.log('42' - 40)
console.log('42' + 40)
console.log('42px' - 2)
console.log(null + 2)
//console.log(undedined + 42)



// == vs === 

console.log(2 == '2')
console.log(undefined == null)
console.log('0' == false)
console.log('0' == false)
console.log('0' == false)

console.log(2 === '2')
console.log(undefined === null)

// Тесты и сравнение ↓

//true
console.log(false == '')
console.log(false == [])
console.log('' == 0)
console.log('' == [])
console.log(0 == [])

//false
console.log(false == {})
console.log('' == {})
console.log(0 == {})
console.log(0 == null)