# Let VS Const

**Переменные let можно изменять**

```javascript
let a = 'Variable a'
let b = 'Variable b'

{
    a = 'New Variable a'
    let b = 'Local Variable b'
    console.log('Scope A', a) // Scope A New Variable a
    console.log('Scope B', b) //Scope B 'Local Variable b'
}
console.log('NoScope A', a) // NoScope A New Variable a
console.log('NoScope B', b)//NoScope B Variable b
```
*Перменная b не поменялась , так как в scope создалась другая переменная b и переменная b не имеет к ней доступа так как она на уровень ниже*
