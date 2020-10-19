interface Waiter {
    skill: boolean;
    say: () => {}
}

interface Teacher {
    skill: boolean;
    skills: () => {}
}

// function judgePerson(type: Waiter | Teacher) {// 联合类型 
//     if(type.skill) {
//         (type as Teacher).skills()
//     } else {
//         (type as Waiter).say()
//     }
//     // type.say() // 没有类型保护会报错
// }

// function judgePerson2(type: Waiter | Teacher) {
//     if('skills' in type) {
//         type.skills()
//     } else {
//         type.say()
//     }
// }

// function add(first: string | number, second: string | number) {
//     if (typeof first === 'string' || typeof second === 'string') {
//         return `${first}${second}`
//     }


//     return first + second;
// }

// class NumberObj {
//     count: number;
// }


// function addObj(first: object | NumberObj, second: object | NumberObj) {
//     if (first instanceof NumberObj && second instanceof NumberObj) {// instanceof 主要用在类上
//         return first.count + second.count
//     }
//     return 0
// }