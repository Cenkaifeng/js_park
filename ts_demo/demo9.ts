//readonly
// class Person {
//     public readonly _name:string
//     constructor(name:string){
//         this._name = name
//     }
// }

// const person = new Person('xixi')
// person.name = '谢广坤'
// console.log(person.name)

//抽象类

// abstract class Person{
//     abstract skill():()=>any // 不能写大括号 用法，规定继承子类必须带有方法，相同名称但是业务逻辑不同
// } // 抽象

// class Waiter extends Person{
//     skill(){
//         console.log('倒水')
//         return 
//     }
// }

// class BaseWaiter extends Person{
//     skill(){
//         console.log('按摩')
//     }
// }

// class Master extends Person{
//     skill(){
//         console.log('收钱')
//     }
// }