(function(log){
    //第一个循环--普通输出
    for (var i = 0; i < 5; i++){
        log("第1个for循环",i);
    }

    //2带定时器输出 由于setTimeout()执行是一个异步操作，即所有代码执行完毕后才会执行
    for(var i = 0; i < 5; i++){
        setTimeout(function(){
            log("第2循环",i)
        }, 1000*i)
    }

    //3使用iife 闭包
    for(var i = 0; i < 5; i++){
        ((i)=>{
            setTimeout(function(){
                log("第3闭包循环",i)
            }, 1000*i)
        })(i)

    }

}(console.log))


