# Value
---
**Переменные :**
```javascript
let firstlet = 42
let seccondlet = firstlet
seccondlet++
console.log('firstlet' , firstlet)  // firstlet 42
console.log('seccondlet' , seccondlet)  // seccondlet 43  
```
* Создаем перменую firstlet и присваиваем ей значение 42
* Создаем переменную seccondlet и присваиваем значения переменной firstlet и прибавляем 1 
* Вывод на экран firstlet 42 и seccondlet 43
---

**Ссылочные типы данных**

```javascript
let arrayOne = [1 , 2 , 3]
let arrayTwo = arrayOne

arrayTwo.push(4)

console.log('arrayOne' , arrayOne)
console.log('arrayTwo' , arrayTwo)
```

* Создаем массив arrayOne
* Создаем массив arrayTwo и передаем ему ссылку на arrayOne 
* Добавляем в конец массива arrayTwo цифру 4 , поскольку мы передали ссылку в arrayTwo ,  то и изменится arrayOne
* arrayOne [1 , 2 , 3 ,4 ]
* arrayTwo [1 , 2 , 3 ,4 ]
---

**Как копировать массивы без мутирования 1 массива ?**

```javascript
let arrayOne = [1 , 2 , 3]
let arrayConcat = arrayOne.concat()
```
*Метод concat() без параметров возвращает копию массива*
---

**Сравнение массивов :**

```javascript
let arrayOne = [1 , 2 , 3]
let arrayTwo = arrayOne
let coppy = [1 , 2 , 3 ,4]

arrayTwo.push(4)

console.log(arrayOne === arrayTwo) //false
console.log(arrayOne === coppy)    //true
```
**arrayOne и arrayTwo ссылаются на 1 объект и  поэтому true**
**arrayOne и coppy ссылаются на разные объекты и поэтому false**