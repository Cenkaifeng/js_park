// 异步 async await promise

let counter = 0;
const increment = new Promise(resolve => {
    counter++;
    resolve();
});
console.log('before await', counter)
// await increment;
// await increment;
console.log('after await', counter);
// 先说明这个写法有问题 一定会报错SyntaxError: await is only valid in async function

//但是把代码放到浏览器环境里执行一定是先跑before await counter = 1 且最终等于1

const microtask = Promise.resolve()
    .then(() => console.log('hello from the microtask queue'));

const macrotask = new Promise(resolve =>
    // 排队宏任务
    setTimeout(() => {
        console.log('hello from the macrotask queue');
        resolve();
    })
    // 没有解决，promise 仍处于 pending 状态
);

// 这是最先输出的； 我们成功地推迟了工作
console.log('hello from the original execution context');

// yield 调度器; 运行 .then() 并输出日志
// console.log('第一次microtask')
// await microtask;
// // yield 调度器;  promise 的状态是 fulfilled ，所以没有日志输出
// console.log('第二次microtask')
// await microtask;

// // yield 调度器; 执行所有微任务，然后运行宏任务并输出日志
// console.log('第一次microtask')
// await macrotask;
// // yield 调度器; promise 已经完成，所以没有日志输出
// console.log('第二次macrotask')
// await macrotask;

// 早期异步函数与失败处理
function double(value, success, failure) {
    setTimeout(() => {
        try {
            if (typeof value !== 'number') {
                throw 'Must provide number as first argument';
            }
            success(2 * value);
        } catch (e) {
            failure(e);
        }
    }, 1000);
}

// const successCallback = (x) => console.log(`Success: ${x}`);
// const failureCallback = (e) => console.log(`Failure: ${e}`);

// double(3, successCallback, failureCallback);
// double('b', successCallback, failureCallback);

// Success: 6（大约1000毫秒之后）
// Failure: Must provide number as first argument（大约1000毫秒之后）

// Promise 状态
// let p = new Promise(() => {});
// setTimeout(console.log, 0, p);  // Promise <pending>


// let p = new Promise((resolve, reject) => {
//   resolve();
//   reject(); // 没有效果
// });

// setTimeout(console.log, 0, p); // Promise <resolved>


// try {
//   throw new Error('foo');
// } catch(e) {
//   console.log(e); // Error: foo
// }

// try {
//   Promise.reject(new Error('bar'));
// } catch(e) {
//   console.log(e);
// }
// Uncaught (in promise) Error: bar\

// 链式操作

let p = new Promise((res, rej) => {
    console.log('first');
    res();
})

p.then(() => console.log('second'))
    .then(() => console.log('third'))
    .then(() => console.log('fourth'));

// 返回一个原始值
async function foo() {
    return 'foo';
}
foo().then(console.log);
// foo

// 返回一个没有实现thenable接口的对象
async function bar() {
    return ['bar'];
}
bar().then(console.log);
// ['bar']

// 返回一个实现了thenable接口的非期约对象
async function baz() {
    const thenable = {
        then(callback) { callback('baz'); }
    };
    return thenable;
}
baz().then(console.log);
// baz

// 返回一个期约
async function qux() {
    return Promise.resolve('qux');
}
qux().then(console.log);
// qux

async function foo() {
    console.log(1);
    await Promise.reject(3);
    console.log(4); // 这行代码不会执行
}

// 给返回的期约添加一个拒绝处理程序
foo().catch(console.log);
console.log(2);

// 1
// 2
// 3


// 不允许：await出现在了箭头函数中
function foo() {
    const syncFn = () => {
        return await Promise.resolve('foo');
    };
    console.log(syncFn());
}

// 不允许：await出现在了同步函数声明中
function bar() {
    function syncFn() {
        return await Promise.resolve('bar');
    }
    console.log(syncFn());
}

// 不允许：await出现在了同步函数表达式中
function baz() {
    const syncFn = function () {
        return await Promise.resolve('baz');
    };
    console.log(syncFn());
}

// 不允许：IIFE使用同步函数表达式或箭头函数
function qux() {
    (function () { console.log(await Promise.resolve('qux')); })();
    (() => console.log(await Promise.resolve('qux')))();
}