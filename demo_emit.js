class EventEmitter {
    constructor() {
        this.events = {}; // 事件
    }

    // 订阅
    on(type, callBack) {
        if ( !this.events[type]) {
            this.event[type] = [callBack];// 如果type不在events 内 
        } else {
            this.event[type].push(callBack)// 不在订阅组里增加
        }
    }

    off(type, callBack) {
        if (!this.events[type]) return;
        this.events[type] = this.events[type].filter( item => {
            return item !== callBack;
        })
    }
    // 单次执行订阅事件
    once(type, callBack) {
        function fn() {
            callBack();
            this.of(type,fn)
        }
        this.on(type, fn);
    }

    emit(type, ...rest) {
        this.events[type] && this.events[type].forEach( fn => fn.apply(this, rest));
    }

    offAll() {
        this.events = {}
    }

}


// const eventDemo = new EventEmitter();

// const handle = (...rest) => {
//     console.log(rest);
// }

// const handle = ...rest => {
//     console.log(rest)
// }
// eventDemo.on("click", handle);

// eventDemo.emit("click", 1, 2, 3, 4);

// eventDemo.off("click", handle);// 取消订阅

// eventDemo.emit("click", 1, 2); // 激活事件传参

// eventDemo.once("dbClick", _ => {
//     console.log('dbclick once');
// })

// eventDemo.emit("dbclick")
// eventDemo.emit("dbclick")