# Async
**Js работает в 1 потоке и с асинхронностью все плохо , но появился eventLoop**

**создаем функции**
```javascript
const first = () => console.log('First')
const second = () => console.log('Second')
const thrid = () => console.log('Thrid')
```

---

**Вызываем функции ↓**
```javascript
    first()
    second()
    thrid()
```
**Вывод :**
* First
* Second
* Thrid