/**
 * 模块依赖
 */
var express = require('express'),
    search = require('./search');

var app = express.createServer();

/**
 * 配置
 */
app.set('view engine', 'ejs'); //调用视图模板引擎指定ejs
app.set('views', __dirname + '/views'); //视图路径
app.set('view options', {
    layout: false
}); //

console.log(app.set('views')) //获取配置信息

/**
 * 路由层
 */

app.get('/', function (req, res) {
    res.render('index')
})

app.get('/search', function (req, res, next) {
    search(req.query.q, function (err, tweets) {
        if (err) return next(err);
        let params = {
            results: tweets,
            search: req.query.q
        }
        res.render('search', params)
    })
})

/**
 * 监听
 */

app.listen(3000, function () {
    console.log('app is listen on port 3000')
})