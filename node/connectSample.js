/**
 * 模块依赖
 */

var connect = require('connect'),
    time = require('./timeNext') //超时中间件

var server = connect.createServer();

server.use(connect.logger('dev')); //记录情况

server.use(time({
    time: 500
}));

//实现快速响应 a
server.use(function (req, res, next) {
    if ('/a' == req.url) {
        res.writeHead(200);
        res.end('Fast!');
    } else {
        next();
    }
})

//模拟慢反应 b
server.use(function (req, res, next) {
    if ('/b' == req.url) {
        setTimeout(function () {
            res.writeHead(200);
            res.end('Slow!');
        }, 1000);
    } else {
        next();
    }
});

server.listen(3000)