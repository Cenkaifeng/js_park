// setTimeout(function () {
//   console.log('timeout')
// })

// process.nextTick(function () {
//   console.log('nextTick 1')
// })

// new Promise(function (resolve) {
//   console.log('Promise 1')
//   resolve();
//   console.log('Promise 2')
// }).then(function () {
//   console.log('Promise Resolve')
// })

// process.nextTick(function () {
//   console.log('nextTick 2')
// })

// Main Promise 1 Promise 2
// Task timeout
// Jobs nextTick[{nextTick 1},  {nextTick2}] Promise Resolve 




//setImmediate为一次Event Loop执行完毕后调用。
//setTimeout则是通过计算一个延迟时间后进行执行。
setTimeout( _ => console.log('setTimeout'));

setImmediate( _ => console.log('setImmediate'));

let countdown = 1e9

while(countdown--) { } // 确保这个循环的执行速度会超过定时器的倒计时，导致这轮循环没有结束时，setTimeout已经可以执行回调了，所以会先执行`setTimeout`再结束这一轮循环，也就是说开始执行`setImmediate`

