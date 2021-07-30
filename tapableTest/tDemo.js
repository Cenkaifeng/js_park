const {
    SyncHook,
    SyncBailHook,
    SyncWaterfallHook,
    SyncLoopHook,
    AsyncSeriesHook,
    AsyncSeriesBailHook,
    AsyncSeriesWaterfallHook,
    AsyncParallelHook,
    AsyncParallelBailHook,
} = require('tapable');

// SyncHook demo

const hook = new SyncHook();

hook.tap('first', _ => {
    console.log('first');
});

hook.tap({name: 'second'}, _ => {
    console.log('second')
})

hook.call();

// AsyncSeriesHook Demo // 异步钩子

const asyncHook = new AsyncSeriesHook();

asyncHook.tapAsync('async first', (name, callback) => {
    console.log('async first', name, callback);
    callback()
})
// 最后一个传入参数是回调函数
asyncHook.callAsync('async first', (error) => {
    console.log('callAsync', error);
}); 

asyncHook.callAsync()