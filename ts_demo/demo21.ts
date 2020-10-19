// enum 枚举

// const Status = {
//     MASSAGE: 0,
//     SPA: 1,
//     BAOJIAN: 2
// }

enum Status { // 枚举类型默认 0开始 设置
    MASSAGE = 1, SPA, BAOJIAN
}

// function getServe(status: number) {
//     if (status === 0) {
//         return "massage"
//     } else if (status === 1) {
//         return "SPA"
//     } else if (status === 2) {
//         return "baojian"
//     }
// }
function getServe(status: any) {
    if (status === Status.MASSAGE) {
        return "massage"
    } else if (status === Status.SPA) {
        return "SPA"
    } else if (status === Status.BAOJIAN) {
        return "baojian"
    }
}
const result = getServe(0)

console.log(`go to ${result}`)
console.log(Status.MASSAGE)
console.log(Status.SPA)
console.log(Status.BAOJIAN)


console.log(Status.MASSAGE, Status[1])