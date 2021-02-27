// // Promise/A+ 规范 手写Promise
// // 定义三种状态

// const PENDING = "pending";
// const FULFILLED = "fulfilled";
// const REJECTED = "rejected";


// function MyPromise(callback) {
//     let self = this;

//     self.value = null;// 成功返回值
//     self.error = null;// 失败原因
//     self.status = PENDING;
//     // self.onFulfilled = null;// 成功回调 resolve
//     // self.onRejected = null;

//     self.onFulfilledCallbacks = [];
//     self.onRejectedCallbacks = []; // 注册回调改数组用于后续链式调用

//     function resolve(value) {
//         if(self.status === PENDING) {
//             // 利用宏任务机制让方法在then后执行 
//             setTimeout(()=> {
//                 self.value = value;
//                 // self.onFulfilled(self.value)// resolve 成功回调
//                 self.onFulfilledCallbacks.forEach( callback => callback(self.value));// 遍历数组执行回调
//             })            
//         }
//     }

//     function reject(error) {
//         if(self.status === FULFILLED) {
//             setTimeout(()=> {
//                 self.status = REJECTED;//执行报错后改状态
//                 self.error = error;
//                 // self.onRejected(self.error);
//                 self.onRejectedCallbacks.forEach(callback => callback(self.error));
//             })            
//         }
//     }
//     callback(resolve, reject);
// }
// // MyPromise.prototype.then = function(onFulfilled, onRejected) {
// //     if (this.status === PENDING) {
// //         // 给promise实例注册成功和失败回调
// //         // this.onFulfilled = onFulfilled;
// //         // this.onRejected = onRejected;
// //         this.onFulfilledCallbacks.push(onFulfilled)
// //         this.onRejectedCallbacks.push(onRejected)
// //     } else if ( this.status === FULFILLED) {
// //         // 如果状态是fulfilled 直接执行成功回调
// //         onFulfilled(this.value);
// //     } else {
// //         onRejected(this.error);
// //     }
// //     return this; // 支持链式
// // }


// MyPromise.prototype.then = function(onFulfilled, onRejected) {
//     const self = this;
//     let bridgePromise;// 为了穿行执行代码，then不再返回自身而通过bridgePromise 返回新的Promise实例

//     onFulfilled = typeof onFulfilled === "function" ? onFulfilled : value => value;
//     onRejected = typeof onRejected === "function" ? onRejected : error => { throw error };

//     if (self.status === FULFILLED) {
//         return bridgePromise = new MyPromise((resolve, reject) => {
//             setTimeout(() => {
//                 try {
//                     let x = onFulfilled(self.value);
//                     resolvePromise(bridgePromise, x, resolve, reject);
//                 } catch (e) {
//                     reject(e);
//                 }
//             });
//         })
//     } 
//     if (self.status === REJECTED) {
//         return bridgePromise = new MyPromise((resolve, reject) => {
//             setTimeout(() => {
//                 try {
//                     let x = onRejected(self.value);
//                     resolvePromise(bridgePromise, x, resolve, reject);
//                 } catch (e) {
//                     reject(e);
//                 }
//             });
//         })
//     } 


//     if (self.status === PENDING) {
//         return bridgePromise = new MyPromise((resolve, reject) => {
//             self.onFulfilledCallbacks.push((value) => {
//                 setTimeout(() => {
//                     try {
//                         let x = onRejected(value);
//                         resolvePromise(bridgePromise, x, resolve, reject);
//                     } catch (e) {
//                         reject(e);
//                     }
//                 });
//             });
//             self.onRejectedCallbacks.push((value) => {
//                 setTimeout(() => {
//                     try {
//                         let x = onRejected(value);
//                         resolvePromise(bridgePromise, x, resolve, reject);
//                     } catch (e) {
//                         reject(e);
//                     }
//                 });
//             })
//         })
//     }
// }

// // catch 方法其实是个语法糖，只传onRejected 不传onFulfilled 的then方法
// MyPromise.prototype.catch = function(onRejected){
//     return this.then(null, onRejected);
// }

// // 解析返回值x ,x可能为普通值或者Promise对象
// function resolvePromise(bridgePromise, x, resolve, reject) {

//     if(bridgePromise === x) {
//         return reject(new TypeError('Circular reference'))// 2.3.1 规范，避免循环引用
//     }

//     let called = false;
//     //这个判断分支其实已经可以删除，用下面那个分支代替，因为promise也是一个thenable对象
//     if (x instanceof MyPromise) {
//         if (x.status === PENDING) {
//             x.then(y => {
//                 resolvePromise(bridgepromise, y, resolve, reject);
//             }, error => {
//                 reject(error);
//             });
//         } else {
//             x.then(resolve, reject);
//         }
//         // 2.3.3规范，如果 x 为对象或者函数
//     } else if (x != null && ((typeof x === 'object') || (typeof x === 'function'))) {
//         try {
//             // 是否是thenable对象（具有then方法的对象/函数）
//             //2.3.3.1 将 then 赋为 x.then
//             let then = x.then;
//             if (typeof then === 'function') {
//             //2.3.3.3 如果 then 是一个函数，以x为this调用then函数，且第一个参数是resolvePromise，第二个参数是rejectPromise
//                 then.call(x, y => {
//                     if (called) return;
//                     called = true;
//                     resolvePromise(bridgepromise, y, resolve, reject);
//                 }, error => {
//                     if (called) return;
//                     called = true;
//                     reject(error);
//                 })
//             } else {
//             //2.3.3.4 如果 then不是一个函数，则 以x为值fulfill promise。
//                 resolve(x);
//             }
//         } catch (e) {
//         //2.3.3.2 如果在取x.then值时抛出了异常，则以这个异常做为原因将promise拒绝。
//             if (called) return;
//             called = true;
//             reject(e);
//         }
//     } else {
//         resolve(x);
//     }

// }


// module.exports = MyPromise

// // 执行测试用例需要用到的代码
// MyPromise.deferred = function() {
//     let defer = {};
//     defer.promise = new MyPromise((resolve, reject) => {
//         defer.resolve = resolve;
//         defer.reject = reject;
//     });
//     return defer;
// }
// try {
//     module.exports = MyPromise
// } catch (e) {}

// 照着敲的通不过测试，估计是打错变量名之类的


const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";

function MyPromise(fn) {
    const self = this;
    self.value = null;
    self.error = null;
    self.status = PENDING;
    self.onFulfilledCallbacks = [];
    self.onRejectedCallbacks = [];

    function resolve(value) {
        if (value instanceof MyPromise) {
            return value.then(resolve, reject);
        }
        if (self.status === PENDING) {
            setTimeout(() => {
                self.status = FULFILLED;
                self.value = value;
                self.onFulfilledCallbacks.forEach((callback) => callback(self.value));
            }, 0)
        }
    }

    function reject(error) {
        if (self.status === PENDING) {
            setTimeout(function() {
                self.status = REJECTED;
                self.error = error;
                self.onRejectedCallbacks.forEach((callback) => callback(self.error));
            }, 0)
        }
    }
    try {
        fn(resolve, reject);
    } catch (e) {
        reject(e);
    }
}

function resolvePromise(bridgepromise, x, resolve, reject) {
    //2.3.1规范，避免循环引用
    if (bridgepromise === x) {
        return reject(new TypeError('Circular reference'));
    }
    let called = false;
    //这个判断分支其实已经可以删除，用下面那个分支代替，因为promise也是一个thenable对象
    if (x instanceof MyPromise) {
        if (x.status === PENDING) {
            x.then(y => {
                resolvePromise(bridgepromise, y, resolve, reject);
            }, error => {
                reject(error);
            });
        } else {
            x.then(resolve, reject);
        }
        // 2.3.3规范，如果 x 为对象或者函数
    } else if (x != null && ((typeof x === 'object') || (typeof x === 'function'))) {
        try {
            // 是否是thenable对象（具有then方法的对象/函数）
            //2.3.3.1 将 then 赋为 x.then
            let then = x.then;
            if (typeof then === 'function') {
            //2.3.3.3 如果 then 是一个函数，以x为this调用then函数，且第一个参数是resolvePromise，第二个参数是rejectPromise
                then.call(x, y => {
                    if (called) return;
                    called = true;
                    resolvePromise(bridgepromise, y, resolve, reject);
                }, error => {
                    if (called) return;
                    called = true;
                    reject(error);
                })
            } else {
            //2.3.3.4 如果 then不是一个函数，则 以x为值fulfill promise。
                resolve(x);
            }
        } catch (e) {
        //2.3.3.2 如果在取x.then值时抛出了异常，则以这个异常做为原因将promise拒绝。
            if (called) return;
            called = true;
            reject(e);
        }
    } else {
        resolve(x);
    }
}

MyPromise.prototype.then = function(onFulfilled, onRejected) {
    const self = this;
    let bridgePromise;
    onFulfilled = typeof onFulfilled === "function" ? onFulfilled : value => value;
    onRejected = typeof onRejected === "function" ? onRejected : error => { throw error };
    if (self.status === FULFILLED) {
        return bridgePromise = new MyPromise((resolve, reject) => {
            setTimeout(() => {
                try {
                    let x = onFulfilled(self.value);
                    resolvePromise(bridgePromise, x, resolve, reject);
                } catch (e) {
                    reject(e);
                }
            }, 0);
        })
    }
    if (self.status === REJECTED) {
        return bridgePromise = new MyPromise((resolve, reject) => {
            setTimeout(() => {
                try {
                    let x = onRejected(self.error);
                    resolvePromise(bridgePromise, x, resolve, reject);
                } catch (e) {
                    reject(e);
                }
            }, 0);
        });
    }
    if (self.status === PENDING) {
        return bridgePromise = new MyPromise((resolve, reject) => {
            self.onFulfilledCallbacks.push((value) => {
                try {
                    let x = onFulfilled(value);
                    resolvePromise(bridgePromise, x, resolve, reject);
                } catch (e) {
                    reject(e);
                }
            });
            self.onRejectedCallbacks.push((error) => {
                try {
                    let x = onRejected(error);
                    resolvePromise(bridgePromise, x, resolve, reject);
                } catch (e) {
                    reject(e);
                }
            });
        });
    }
}
MyPromise.prototype.catch = function(onRejected) {
    return this.then(null, onRejected);
}
// 执行测试用例需要用到的代码
MyPromise.deferred = function() {
    let defer = {};
    defer.promise = new MyPromise((resolve, reject) => {
        defer.resolve = resolve;
        defer.reject = reject;
    });
    return defer;
}
try {
    module.exports = MyPromise
} catch (e) {}