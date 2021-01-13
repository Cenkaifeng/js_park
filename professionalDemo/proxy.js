// 代理与反射

const target = { // 代理目标对象
    id: 'target'
};

const handler = {};// 操作对象

const proxy = new Proxy(target, handler);


// id属性会访问同一个值

console.log(target.id);
console.log(proxy.id);

target.id = 'foo'; // 直接修改target对象 proxy.id 也会改变
console.log(target.id);
console.log(proxy.id);

// 修改代理对象会直接作用在目标对象

proxy.id = 'bar'; 
console.log(target.id);
console.log(proxy.id);

// hasOwnProperty()方法在两个地方
// 都会应用到目标对象
console.log(target.hasOwnProperty('id')); // true
console.log(proxy.hasOwnProperty('id'));  // true

// Proxy.prototype是undefined
// 因此不能使用instanceof操作符
// console.log(target instanceof Proxy); // TypeError: Function has non-object prototype 'undefined' in instanceof check
// console.log(proxy instanceof Proxy);  // TypeError: Function has non-object prototype 'undefined' in instanceof check

// 严格相等可以用来区分代理和目标
console.log(target === proxy); // false


// trap (自定义拦截器)

const targetTrap = {
    foo: 'bar'
}

const handlerTrap = {
    // 捕获器在处理程序对象中以方法名为key
    get() {
        return 'handler override'
    }
    // get(trapTarget, property, receiver) {
    //     console.log(trapTarget === target);
    //     console.log(property);
    //     console.log(receiver === proxy);
    // }
}

const proxyTrap = new Proxy(targetTrap, handlerTrap)

console.log(targetTrap.foo);
console.log(proxyTrap.foo);


console.log(targetTrap['foo']);                 // bar
console.log(proxyTrap['foo']);                  // handler override

console.log(Object.create(targetTrap)['foo']);  // bar
console.log(Object.create(proxyTrap)['foo']);   // handler override


// 捕获器不变式 trap invariant

const target = {};
Object.defineProperty(target, 'foo', {
  configurable: false,
  writable: false,
  value: 'bar'
});

const handler = {
  get() {
    return 'qux';
  }
};

const proxy = new Proxy(target, handler);

console.log(proxy.foo);
// TypeError