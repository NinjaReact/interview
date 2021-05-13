# IIFE

**immediate Invoked Function Expression**

**Function Expression - который моментальнро выполняется**

```javascript

let result = []
for(var i = 0 ; i < 5; i++){
    (function () {
        var j = i
        result.push(function(){
            console.log(j)
        })
    })()
}

result[4]()
```

**У нас есть пустой массив , записывая в него через цикл , мы делаем функции которые называются result[i] при вызове этой функции result[i]() , она выводит на экран свой индекс**

*Возможно j нужно для буферизации i , так как var сразу дойдет до максимума и остановится на последнем значение и все будут 5 (вроде как)*