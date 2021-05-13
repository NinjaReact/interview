#Типы данных :

**null , undedined , boolean , number , string , object, symbol**

**Все типы данных кроме object - примитивные **
---
**отличия undedined от null :**
undedined - не объявлена переменная , функция которая не возвращает ничего 
null - Отсутсвует значение , когда переменая объявлена но в ней нет значения
---

---
**if(data Type) ↓**

**false values : '' , 0 . null ,undedined , Nan , false :**
```javaScript
console.log(Boolean(0))   //false
console.log(Boolean(''))  //false
console.log(Boolean(null))//false
```

**true values : все остальные типы данных и значения :** 
```javaScript
console.log(Boolean('Hello'))       //true 
console.log(Boolean(' '))     		//true
console.log(Boolean('0'))           //true
console.log(Boolean({}))            //true
console.log(Boolean([]))			//true
console.log(Boolean(function(){}))  //true
```
---

**Строки :**

```javascript
console.log(1 + '2')			//12
console.log('' + 1 + 0)			//10
console.log('' - 1 + 0)			//-1
console.log('3' * '8')			//24
console.log(4 + 10 + 'px')		//14px
console.log('px' + 5 + 10)		//px510
console.log('42' - 40)			//2
console.log('42' + 40)			//4240
console.log('42px' - 2)			//Nan
console.log(null + 2)			//2
console.log(undedined + 42)		//undefined is not defined
```

**== vs ===**

**== - Приводит типы данных обоих значений**
**=== - Сравнивает значения без приведения типов данных**


**true :**
```javaScript
console.log(2 == '2')
console.log(undefined == null)
console.log('0' == false)
console.log('0' == false)
console.log('0' == false)
```

**false :**
```javaScript
console.log(2 === '2')
console.log(undefined === null)
```

---

**Полезные сравнения которые стоит знать** 


**true :**
```javascript
console.log(false == '')
console.log(false == [])
console.log('' == 0)
console.log('' == [])
console.log(0 == [])
```

**false :**

```javascript
console.log(false == {})
console.log('' == {})
console.log(0 == {})
console.log(0 == null)
```