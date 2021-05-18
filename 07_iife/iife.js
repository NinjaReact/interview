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