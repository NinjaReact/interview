const person = {
    surname : 'Stark',
    knows : function (what , name) {
        console.log(`Ты ${what} знаешь , ${name} ${this.surname}`)
    }
}

const john = { surname : 'Snoy'}

person.knows('все' , 'Bran')

person.knows.call(john , 'ничего не' , 'John')
person.knows.call(john , ...['ничего не' , 'John'])
person.knows.apply(john , ['ничего не' , 'John'])

const bound = person.knows.bind(john , 'ничего не' , 'John')

bound()

console.log(person.surname)

// =======

function Person(name , age) {
    this.name = name
    this.age = age

    console.log(this)
}

const elena = new Person('Elena' , 20)

//=== === ===

function logThis() {
    console.log(this)
}

const obj ={num : 42}

logThis.apply(obj)
logThis.call(obj)
logThis.bind(obj)()

// === === ===

const animal = {
    legs : 4,
    logThis :function() {
        console.log(this)
    }
    
}
animal.logThis()


// === === ===

function Cat (color){
    this.color = color

    console.log('This' , this);
    (()=> console.log('Arrow this' , this))()
}
new Cat('red')