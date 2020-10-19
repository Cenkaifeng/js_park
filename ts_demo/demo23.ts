// 泛型 class

interface Person {
    name: string;
}

// class SelectPerson<T extends Person> {// 泛型中的继承
//     constructor(private person: T[]) {

//     }
//     getPerson(index: number): string {
//         return this.person[index].name
//     }
// }
class SelectPerson<T extends number | string> {// 泛型中的继承 && 泛型约束
    constructor(private person: T[]) {

    }
    getPerson(index: number): T {
        return this.person[index];
    }
}

// const selectPerson = new SelectPerson([{ name: 'xixi' }, { name: 'heihei' }])
const selectPerson = new SelectPerson<string>(['xixi', 'heihei'])

console.log(selectPerson.getPerson(1))
console.log(selectPerson.getPerson(2))

class SelectPerson2<T> {
    constructor(private person: T[]) { }
}
// TODO: 泛型接口