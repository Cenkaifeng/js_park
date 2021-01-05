let person = {};
Object.defineProperty(person, "name", {
    writable: false,
    value: "Nicholas"
});

console.log(person.name);
person.name = "Gray";
console.log(person.name);

// 访问器属性
// let book = {
//     year_: 2017,
//     edition: 1
// };

// Object.defineProperty(book, "year", {
//     get() {
//         return this.year_;
//     },
//     set (newValue) {
//         if (newValue > 2017) {
//             this.year_ = newValue;
//             this.edition += newValue - 2017
//         }
//     }
// })


// console.log(book.edition)
// book.year = 2018
// console.log(book.edition)

// 同时定义多个属性 效果同上
let book = {};
Object.defineProperties(book, {
    year_: {
        value: 2017
    },
    edition: {
        value: 1
    },

    year: {
        get() {
            return this.year_;
        },

        set(newValue) {
            if (newValue > 2017) {
                this.year_ = newValue;
                this.edition += newValue - 2017
            }
        }
    }
})

// 读取属性特性

let descriptor = Object.getOwnPropertyDescriptor(book, "year_");
console.log(descriptor.value);
console.log(descriptor.configurable);
console.log(typeof descriptor.get);

let descriptor2 = Object.getOwnPropertyDescriptor(book, "year");
console.log(descriptor2.value);
console.log(descriptor2.enumerable);
console.log(typeof descriptor2.get);// getOwnPropertyDescriptors (同时展示所有属性的api)

// 合并对象

let dest, src, result;

// 简单复制

// dest = {};
// src = { id: 'src'};

// result = Object.assign(dest, src);

// console.log(dest === result); // true
// console.log(dest !== src); // true
// console.log(result); // { id: src }
// console.log(dest);
console.log("___________________")

// 多源对象

dest = {};

result = Object.assign(dest, {a: 'foo'}, {b: 'bar'});
console.log(result);

dest = {
    set a (val) {
        console.log(`Invoked dest setter with param ${val}`)
    }
};

src = {
    get a() {
        console.log('Invoked src getter');
        return 'foo';
    }
}

Object.assign(dest,src);
// 调用src的获取方法
// 调用dest的设置方法并传入参数"foo"
// 因为这里的设置函数不执行赋值操作
// 所以实际上并没有把值转移过来
console.log(dest)


console.log("___________________")

console.log(Object.is(true, 1));  // false
console.log(Object.is({}, {}));   // false
console.log(Object.is("2", 2));   // false

// 正确的0、-0、+0相等/不等判定
console.log(Object.is(+0, -0));   // false
console.log(Object.is(+0, 0));    // true
console.log(Object.is(-0, 0));    // false

// 正确的NaN相等判定
console.log(Object.is(NaN, NaN)); // true

// 可计算属性 & 可变属性名

const nameKey = 'name';
const ageKey = 'age';
const jobKey = 'job';

let person = {
  [nameKey]: 'Matt',
  [ageKey]: 27,
  [jobKey]: 'Software engineer'
};

console.log(person); // { name: 'Matt', age: 27, job: 'Software engineer' }

// 简写方法名


// let person = {
//     sayName: function(name) {
//       console.log(`My name is ${name}`);
//     }
//   };
  
//   person.sayName('Matt'); // My name is Matt

// 等价上面的
let person = {
    sayName(name) {
      console.log(`My name is ${name}`);
    }
};

// 简写方法与可计算属性键兼容印证之前 [Symbol.iterator] () { return} 的写法
person.sayName('Matt'); // My name is Matt

const methodKey = 'sayName';

let person = {
  [methodKey](name) {
    console.log(`My name is ${name}`);
  }
}

person.sayName('Matt'); // My name is Matt