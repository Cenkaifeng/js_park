// 可迭代对象
let arr = ['foo', 'bar'];

// 迭代器工厂函数
// console.log(arr[Symbol.iterator]);

// let iter = arr[Symbol.iterator]();
// console.log(iter)

// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());

// class Foo {
//     [Symbol.iterator]() {
//         return {
//             nex() {
//                 return { done: false, value: 'foo'}
//             }
//         }
//     }
// }

// let f = new Foo();

// console.log(f[Symbol.iterator]())

// 自定义有迭代限制的迭代器

class Counter {
    constructor(limit) {
        this.count = 1;
        this.limit = limit;
    }


    [Symbol.iterator]() { 
        // 把计数器放闭包，通过闭包返回迭代器，可以让一个迭代对象创建多个迭代器
        let count = 1,
            limit = this.limit
        return {
            next() {
                if (count <= limit) {
                    return { done: false, value: count++ };
                } else {
                    return { done: true, value: undefined };
                }
            },
            return() {
                console.log('Exiting early');
                return { done: true };
            }
        }
    }
}
// let counter = new Counter(3)

// for (let i of counter) {
//     console.log(i)
// }
// for (let i of counter) {
//     console.log(i)
// }


//如果迭代器没有关闭，则还可以继续从上次离开的地方继续迭代。比如，数组的迭代器就是不能关闭的：

let a = [1, 2, 3, 4, 5];
let iter = a[Symbol.iterator]();

iter.return = function() {
    console.log('Exiting early');
    return { done: true}
}

for ( let i of iter) {
    console.log(i);
    if (i > 2) {
        break
    }
}

for (let i of iter ) {
    console.log(i);
}