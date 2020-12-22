((log)=>{

    // setTimeout(function() {
    //     log(1)
    // }, 0);
    // new Promise(function executor(resolve) {
    //     log(2);
    //     for( var i=0 ; i<10000 ; i++ ) {
    //         i == 9999 && resolve();
    //     }
    // log(3);
    // }).then(function() {
    //     log(4);
    // });
    // log(5);
        //首先先碰到一个 setTimeout，于是会先设置一个定时，在定时结束后将传递这个函数放到任务队列里面，因此开始肯定不会输出 1 。

        // 然后是一个 Promise，里面的函数是直接执行的，因此应该直接输出 2 3 。

        // 然后，Promise 的 then 应当会放到当前 tick 的最后，但是还是在当前 tick 中。

        // 因此，应当先输出 5，然后再输出 4 。

        // 最后在到下一个 tick，就是 1 。

    //TODO:更多demo


    //origin demo from https://segmentfault.com/a/1190000011652907
    
    var promiseDemo = new Promise((resolve,reject)=>{
        //两秒定时，接收状态
        setTimeout(()=>{
            resolve('success');
        }, 2000);
    })

    promiseDemo.then(res => {
            log(res);//success
            // return promiseDemo;//此处讲promise实例作为返回值后，下一次then会做重复的调用 resolve fulfilled 
        }, rej => {
            log(rej)
        }).then(data => {
            //data 为上步调用then 的返回值
            log(`链式 ${data}`); //链式 undefined

            return new Promise((resolve, reject) => {
                reject('将状态置位为 rejected error');//返回一个rejected状态的Promise实例
            })
        }).then(data => {
            log('第三个then');
            log(data);
        }, err => {
            log(err);
        }).then(data => {
            log('第四个then');
            log('没有明确返回值，默认fulfilled ?')
        }, err => {
            log('test err ?');
        })

    var promiseErr = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('error');
        }, 2000);
    })

    promiseErr.then(res => {
        log(res);
    }).catch(err => {
        log(`catch ${err}`);
    })

    var arr = [1, 2, 23, 4];
    var promiseAll = arr.map((e)=>{
        return new Promise((resolve, reject) => {
            if (e === 3){
                reject('rejected promise-all');
            }
            var resObj = {
                data: e * 5,
                msg: "resolve"
            }
            resolve(resObj);
        })
    });

    Promise.all(promiseAll).then(data => {
        log(data);
    }).catch(e => {
        log(e);
    })

})(console.log)