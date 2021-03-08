// new Promise((resolve, reject) => {
//     try {
//         const data = 'Perform a task'
//         resolve(data)
//     } catch(e) {
//         reject(new Error(e))
//     }
// })

// new Promise((res, rej) => res("Yep!"))// PromiseStatus: "fulfilled"  PromiseValue: "Yap！"
// new Promise((res, rej) => rej("Nop!"))// PromiseStatus: "rejected" PromiseValue: "Nop!"


// function getImage(file) {
//     return new Promise((res, rej) => {
//         try {
//             const data = readFile(file)
//             res(data)
//         } catch (e) {
//             rej(new Error(e))
//         }
//     })
// }

