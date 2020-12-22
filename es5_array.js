(function (log) {


    log('es5_array is on')

    //every() 该方法对数组中的每一项运行给定函数，如果该函数对每一项都返回 true，则返回true。
    let everyArr = [1, 4, 1, 6, 2, 7, 8, 3]

    let everyRes = everyArr.every((item, index, array) => {
        // log('index', index)
        // log('array', array)
        return item > 1;
    })

    // log(everyRes)

    //some() 该方法对数组中的每一项运行给定函数，如果该函数对任何一项返回 true，则返回true。

    let someArr = [2, 7, 5, 2, 8, 7]

    let someRes = someArr.some((item, index, array) => {
        return item > 2;
    })
    // log(someRes)

    //filter() ：该方法对数组中的每一项运行给定函数，返回该函数会返回 true 的项组成的数组。利用这个方法可对数组元素进行过滤筛选。

    let filArr = [2, 7, 5, 2, 8, 7]

    let filRes = filArr.filter((item, index, array) => {
        return item > 2;
    })
    // log(filRes)

    // map() : 该方法对数组中的每一项运行给定函数，返回每次函数调用的结果组成的数组。

    let testArr = [{
        name: 'adsf',
        age: 123
    }, {
        name: 'asdsf',
        age: 123
    }, {
        name: 'adsdsf',
        age: 123
    }, {
        name: 'adsdfsf',
        age: 123
    }, {
        name: 'adsdfsf',
        age: 123
    }]

    let mapRes = testArr.map((item, index, array) => {
        // log(index)
        return item.name;
    })

    // log(mapRes)

    //forEach() :这个方法其实就是遍历循环，和for循环没有太大差别
    let eachArr = [1, 3, 4, 5, 6, 7, 1]
    eachArr.forEach((item, index, arr) => {
        // log(item)
    })

    /*reduce() :归并方法
     *  reduce()和reduceRight()两个方法，这两个方法都会迭代数组中的所有项，然后生成一个最终返回值。
     *  他们都接收两个参数，第一个参数是每一项调用的函数，函数接受是个参数分别是初始值，当前值，索引值，和当前数组，
     *  函数需要返回一个值，这个值会在下一次迭代中作为初始值。第二个参数是迭代初始值，参数可选，如果缺省，
     *  初始值为数组第一项，从数组第一个项开始叠加，缺省参数要比正常传值少一次运算
     */

    let redArr = [2, 4, 6, 7, 6, 4, 3, 1, 6]

    var redAll = redArr.reduce((prev, cur, index, arr) => {
        // log('prev', prev)
        // log('cur', cur)
        // log('index', index)
        return prev + cur
    })

    // log(redAll)
    let matrix = [
        [2, 1],
        [2, 4],
        [6, 7],
        [6, 4],
        [3, 1]
    ]
    //用于矩阵降维
    var resMatrix = matrix.reduce((prev, cur, index, arr) => {
        log('prev', prev)
        log('cur', cur)
        log('index', index)
        return cur.concat(prev);
    })

    log(resMatrix)
})(console.log)