function sayHelloTo(name) {
    const message = 'Hello' + name
    return function () {
        console.log(message)
    }
}


const helloToElena = sayHelloTo('Elena')

console.log(helloToElena)
helloToElena()


function createFrameworkManager() {
    const fw = ['angular' , 'react']
    return {
        print : function() {
            console.log(fw)
        },
        add : function(framework){
            fw.push(framework)
        }

    }
}

const manager = createFrameworkManager()
console.log(manager)
manager.print()
manager.add('vue')
manager.print()
