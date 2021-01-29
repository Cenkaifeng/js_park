// TODO: 后续搬到印象笔记md文档格式

// 改变this指向的三种方法 call() apply bind()

// call() 调用（呼叫）

let o = {
    name: 'john'
};

function fn(a, b) {
    console.log('call', this);
    console.log(a + b)
}
fn.call(o, 1, 2);
// 可调用函数
// 可改变函数内this
// call 主要作用可以实现继承

function Papa(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}

function Son(name, age, gender) {
    Papa.call(this, name, age, gender)
}

let son = new Son('john', 18, 'M')
console.log(son)//{ name: 'john', age: 18, gender: 'M' }

// apply() 应用
var o = {
    name: 'jervis'
};

function fn(a) {
    console.log(this);
    console.log(a)
}

fn.apply(o);//o
fn.apply(o, ['jervis'])
// 1. 调用函数，改变内部this指向
// 2. 参数必须是数组
// 3. 主要应用

const arr = [1,2,3,4,5,6,7]

const max = Math.max.apply(Math, arr);// 因为不需要改变指向，可以直接写null 但是在严格模式下会出现错误所以建议填函数的调用者
const min = Math.min.apply(Math, arr);

console.log(`max: ${max}; min: ${min};`)//max: 7; min: 1


// bind() 绑定

let o = {
    name: 'John'
};

function fn(a, b) {
    console.log('function inner', this);
    // console.log(a + b);
};

fn();// global
let f = fn.bind(o, 1, 2);
f();// o
fn();// global
/*
    1. 不会调用原函数，
    2. 并改变原函数内部指向，
    3. 然后返回改变指向后的拷贝

    4. 使用场景：如果有的函数不需要立即调用又想改变这个函数的内部this
        需求：需要一个点击后便禁用，3秒后重新开启的按钮。
        （参照thisBindDemo.html)
*/


//总结

// 相似点： 都可以改变函数内部this的指向


/* 区别： 
1. call 和apply 会调用函数，并改变函数内部this指向
2. call 和apply 传递的参数不一样，call(object, param1, param2 ) apply(object, [param1, param2])
2. bind 不会直接调用函数，不会改变函数内部this指向，但是会返回改变this指向的原函数的拷贝

主要应用场景：
1. call 经常用作继承构造函数
2. apply 经常与数组有关系，比如借助Math 实现数组求最大最小值
3. bind 不调用函数，但是还想改变this指向（有了箭头函数之后用的少了）
*/