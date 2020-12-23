function* ga() {}

function* gb() {}

function* gc() {}

// 各种生成器写法

// function* generatorFn() {} // 函数式

// let generatorFn = function* () {} // 函数表达式

let foo = { //对象字面量
    * generatorFn() {}
}

//类实例方法

class Foo {
    * generatorFn() {}
}

// 类静态方法

// class Bar {
//     static * generatorFn() {}
// }

// function* generatorFn() {
//     yield 'foo';
//     yield 'bar';
//     return 'baz';
// }

// let generatorObject = generatorFn();

// console.log(generatorObject.next()); // { done: false, value: 'foo' }
// console.log(generatorObject.next()); // { done: false, value: 'bar' }
// console.log(generatorObject.next()); // { done: true, value: 'baz' }

function* nTimes(n) {
    while(n--) {
        yield;
    }
}

for (let _ of nTimes(3)) {
    // console.log('foo');
}


function* generatorYield(initial) {
    console.log(initial);
    console.log(yield);
    console.log(yield);
}

let generatorObj = generatorYield('foo')

generatorObj.next('bar');  // foo
generatorObj.next('baz');  // baz
generatorObj.next('qux');  // qux


// 等价的generatorFn：
// function* generatorFn() {
//   for (const x of [1, 2, 3]) {
//     yield x;
//   }
// }
function* generatorFn() {
    yield* [1, 2, 3];
  }
  
  let generatorObject = generatorFn();
  
  for (const x of generatorFn()) {
    console.log(x);
  }
  // 1
  // 2
  // 3

  // 生成器实现递归算法
  function* nTimes(n) {
    if (n > 0) {
      yield* nTimes(n - 1);
      yield n - 1;
    }
  }
  
  for (const x of nTimes(3)) {
    console.log(x);
  }
  // 0
  // 1
  // 2

  // 这个demo有点绕
  function* innerGeneratorFn() {
    yield 'foo';
    return 'bar';
  }
  function* outerGeneratorFn(genObj) {
    console.log('iter value:', yield* innerGeneratorFn());
  }
  
  for (const x of outerGeneratorFn()) {
    console.log('value:', x);
  }
  // value: foo
  // iter value: bar