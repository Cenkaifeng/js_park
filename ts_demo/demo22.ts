//泛型(函数中)

// function join<JSXI>(first: JSXI, second: JSXI) {
//     return `${first}${second}`
// }

// join<string>('test', 'test')
// join<number>(1, 2)


// //泛型数组
// // function myFun<ANY>(params: Array<ANY>)
// function myFun<ANY>(params: ANY[]) {
//     return params;
// }

// function mySecondFun<T, P>(params1: T, params2: P){

// }

// // 泛型也能类型推断，但是不建议去写
// myFun<string>(['xx'])
// myFun<string | number>([1, 'x'])