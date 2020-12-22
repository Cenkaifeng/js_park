(function(log){
    log('arrays.js in on');

    var is_array = function (value) {
        return value &&
            typeof value === 'object' && 
            value.constructor === 'Array';
    };

    //判断数组方法， 注意：识别不同window 或 frame 内构造的数组时会失败


    //batter way

    var is_array = function (value) {
        return Object.prototype.toString.apply(value) === '[object Array]';
    }

    //test is_array

    is_array([])// true

    is_array({})//false

}(console.log))