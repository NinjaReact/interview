function Cat (color , name) {
    this.color = color
    this.name = name
}

const cat = new Cat('black' , 'kot')
console.log(cat)

//=== 
function myNew(constructor , ...args) {
    const obj ={}

    Object.setPrototypeOf(obj , constructor.prototype)
    return constructor.apply(obj , args) || obj
}
const sat = myNew(Cat , 'black' , 'kot')
console.log(sat)