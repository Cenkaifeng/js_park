/**
 * 请求时间中间件
 * @param Number time 
 */

module.exports = function (opts) {
    var time = opts.time || 100;
    return function (req, res, next) {
        var timer = setTimeout(() => {
            console.log('is taking too long', req.method, req.url);
        }, time)

        //重写方法
        var end = res.end;
        res.end = function (chunk, encoding) {
            res.end = end;
            res.end(chunk, encoding);
            clearTimeout(timer);
        };
        //其他中间件处理请求
        next();
    }
}