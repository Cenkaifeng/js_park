/**
 * 人们很容易把this理解成指向函数自身，其实this的指向在函数定义阶段是无法确定的，
 * 只有函数执行时才能确定this到底指向谁，实际上this的最终指向是调用它的那个对象。
 * 
 * 
 * 声明函数foo，执行foo.count=0时，的确向函数对象foo添加了一个属性count。
 * 但是函数foo内部代码this.count中的this并不是指向那个函数对象，
 * for循环中的foo(i)掉用它的对象是window，等价于window.foo(i)，
 * 因此函数foo里面的this指向的是window。
 */
function foo(num) {
    console.log('调用第:' + num + '次');
    //记录调用次数
    this.count++;
}

foo.count = 0;

for (let i = 0; i < 10; i++) {
    if (i > 5) {
        foo(i);
    }
}

console.log(foo.count);



function foo() {
    var a = 2;
    this.bar();
}

function bar() {
    console.log(this.a);
}
foo();

//定义一个add 方法
function add(x, y) {
    return x + y;
}

//用call 来调用 add 方法
function myAddCall(x, y) {
    //调用 add 方法 的 call 方法
    return add.call(this, x, y);
}

function demo() {
    console.log(this.a);
    // 1-严格模式下 输出TypeError: Cannot read property 'a' of undefined
    //2-非严格模式 浏览器环境a绑定到window.a
    //3-非严格模式 在node环境中，不会将a绑定到global，因此下面输出undefined
}
let a = 1;
demo();


let methods = {
    foo_1,
    foo_2,
    name: 'methods'
}

function foo_1() {
    console.log('方法1' + this.name);
}

function foo_2() {
    console.log('方法2' + this.name)
}

methods.foo_1();
methods.foo_2()



{
    function foo_1() {
        console.log('方法1' + this.name);
    }
    let methods = {
        foo_1, //通过属性引用this所在的函数
        name: 'methods'
    }
    var name = 'lalala' //全局属性

    let newFoo = methods.foo_1; //进行了一次引用赋值 
    newFoo()

}

//宏任务Task 微任务 Microtasks

console.log(1)
setTimeout(function () {
    console.log(2)
}, 100)
new Promise(function () {
    console.log(3)
}).then(function () {
    console.log(4)
})
console.log(5)

//1 3 5 2