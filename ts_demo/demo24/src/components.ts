// namespace Components {
//     export namespace SubComponents {
//         export class Test {
//             constructor() { }
//         }
//     }
export class Header {
    constructor() {
        const elem = document.createElement("div")
        elem.innerText = "It's Header"
        document.body.appendChild(elem)
    }
}

export class Content {
    constructor() {
        const elem = document.createElement("div")
        elem.innerText = "It's Content"
        document.body.appendChild(elem)
    }
}

export class Footer {
    constructor() {
        const elem = document.createElement("div")
        elem.innerText = "It's Footer"
        document.body.appendChild(elem)
    }
}
// }
// 命名空间内子空间