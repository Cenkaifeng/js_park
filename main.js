
// import {test} from './lib';
//使用require代替import
//由于node 环境不支持小部分es6 语法，如需使用需要webpack对代码做编译，故此demo在nodejs 环境不生效
// const test =require('./lib')
const server = require('./miniService')
let testNum = 454;
let testStr = "test";
let testObj = {};

// console.log(testNum);
// console.log(testStr);
// console.log(testObj);

// test(); 


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