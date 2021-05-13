# Scope

**Scope - доступность опр переменных в функциях**

**Глобальный Scope - переменные объявлены вне функции , но доступны в всех функциях этого scope**
**Локальный Scope - переменные вдоступные только внутри функции**

```javascript
function funcA(){
    let a = 1
    function funcB(){
        let b = 2
        function funcC(){
            let c = 3

            console.log('funcC' , a , b , c)  //funcC 1 2 3
        }
        funcC()
        console.log('funcB' , a , b )       //funcC 1 2 
    }
    funcB()
    console.log('funcA' , a )               //funcA 1 
}
funcA()
```
**Переменные видны функция выше  но не вложенные переменные**
* funcC - Видит все 3 переменные
* funcB - Видит все кроме переменной c , хранящейся в funcC , которая находится на уровень ниже
* funcA - Видит только свою переменную