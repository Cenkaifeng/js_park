//promise封装请求模板

module.exports = {
    request, //封装的 wx.request请求函数
    post,    //post请求
    get,     //get请求
    usePromise,
    //多请求测试
    usePromise1,
    usePromise2,
    usePromise3,
}

function request(options, url, data) {
    let promise = new Promise((resolve, reject) => {
        const header = {
            'content-type': 'application/json',
            ...options.header,
            // 存入sessionId
            "session-id": getApp().globalData.sessionId,
            version: getApp().config.version
        }

        wx.request({
            url: getApp().config.HOST + options.urlName,
            data: data,
            header: header,
            method: options.method || "POST",
            dataType: options.dataType || 'json',
            responseType: options.responseType || 'text',
            success: function (res) {
                if(res.code === 1){
                    resolve(res.data.data);//成功回调
                }else if(res.code === 2){//根据请求写入更多状态
                    //TODO: 
                }
            },
            fail: function (e) {
                if(e.code === 101){
                    reject('网络出错');//失败回调
                }
                
            }
        })
        // console.log('传入Promise的data',data);
        // if(data.sendData == 1){
        //     resolve('success callback！！！');
        // }else{
        //     reject('err callback!!!!!!');
        // }
    })

    return promise;
}

function post(url, data) {
    let options = {
            method: 'POST',
            dataType: 'json',
            responseType: 'text',
        },
        that = this;
    return that.request(options, url, data);
}

function get(url, data) {
    let options = {
            method: 'GET',
            dataType: 'json',
            responseType: 'text',
        },
        that = this;
        
     return that.request(options, url, data);
}

function usePromise(data){
    return this.get('trest', data);
}

//以下为多请求接口测试
/**
 *   [usePromise1]
 *    @param  {Object} data 传入的参数对象
 *    @return {Object}
 */
function usePromise1(data){
    return this.get('PromiseTest1', data);
}

function usePromise2(data){
    return this.get('PromiseTest2', data);
}

function usePromise3(data){
    return this.get('PromiseTest3', data);
}


///////////调用模板

const server = require('./httpPromise')

//Promise封装http请求测试
server.usePromise({sendData:1}).then(
    res => {
        console.log(res);
    }
).catch( e => {
    console.log(e);
})

//同步使用多请求all方法
var promiseAll = Promise.all([
    server.usePromise({sendData:1}),
    server.usePromise1({sendData:1}),
    server.usePromise2({sendData:1}),
    server.usePromise3({sendData:1})
]).then( res => {
    console.log("Promise all res", res)
}).catch( e => {
    // throw new console.error(e);
    console.log(e);
})