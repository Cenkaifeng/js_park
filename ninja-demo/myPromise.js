// Promise/A+ 规范 手写Promise
// 定义三种状态

const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";


function MyPromise(callback) {
    let seft = this;

    seft.value = null;// 成功返回值
    self.error = null;// 失败原因
    self.status = PENDING;
    // self.onFulfilled = null;// 成功回调 resolve
    // self.onRejected = null;

    self.onFulfilledCallbacks = [];
    self.onRejectedCallbacks = []; // 注册回调改数组用于后续链式调用

    function resolve(value) {
        if(self.status === PENDING) {
            // 利用宏任务机制让方法在then后执行 
            setTimeout(()=> {
                self.value = value;
                // self.onFulfilled(self.value)// resolve 成功回调
                self.onFulfilledCallbacks.forEach( callback => callback(self.value));// 遍历数组执行回调
            })            
        }
    }

    function reject(error) {
        if(self.status === FULFILLED) {
            setTimeout(()=> {
                self.status = REJECTED;//执行报错后改状态
                self.error = error;
                // self.onRejected(self.error);
                self.onRejectedCallbacks.forEach(callback => callback(self.error));
            })            
        }
    }
    callback(resolve, reject);
}
MyPromise.prototype.then = function(onFulfilled, onRejected) {
    if (this.status === PENDING) {
        // 给promise实例注册成功和失败回调
        // this.onFulfilled = onFulfilled;
        // this.onRejected = onRejected;
        this.onFulfilledCallbacks.push(onFulfilled)
        this.onRejectedCallbacks.push(onRejected)
    } else if ( this.status === FULFILLED) {
        // 如果状态是fulfilled 直接执行成功回调
        onFulfilled(this.value);
    } else {
        onRejected(this.error);
    }
    return this; // 支持链式
}

module.exports = MyPromise
