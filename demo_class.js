console.log('run demo_class.js')
class Foo {
    constructor() {
        // Foo = "bar" // 报错 Assignment to constant variable.
    }
}

const foo = new Foo()


console.log(typeof Foo) // function
console.log(typeof foo) // object
Foo = "baz"