// class CustomHTMLElement {
//     constructor(element) {
//         this.element = element
//     }
//     get html() {
//         return this.element.innerHTML;
//     }

//     set html(value) {
//         this.element.innerHTML = value
//     }

// }

// var descriptor = Object.getOwnPropertyDescriptor(CustomHTMLElement.prototype, 'html')

// console.log("get" in descriptor)
// console.log("set" in descriptor)

class MyClass {
    * createIterator() {
        yield 1;
        yield 2;
        yield 3;
    }
}

let instance = new MyClass();

let iterator = instance.createIterator();
let v = iterator.next();
console.log(v.value)
console.log(iterator)

v = iterator.next();
console.log(v.value)

v = iterator.next();
console.log(v.value)