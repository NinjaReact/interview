# Let VS Const

# let
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
---

# Const 

**Константы примитивных типов данных нельзя менять !!! ↓**
```javascript
const port = 8080
port = 20
```
**ошибка!!!**

---

**Константы и ссылочные типы данных**
*нельзя менять тип данных , но можно делать все что угодно*

**array ↓** 

```javascript
const array = ['js' , 'is' , 'awesome']
array.push('!')
array[0] = 'JS'

//array = '' - ERROR , нельзя менять тип данных
```

---

**Object ↓**

```javascript
const obj ={}

obj.name = 'Naruto'
obj.age = 16

delete obj.name
```