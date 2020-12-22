/**
 * 模块依赖
 */

var express = require('express'),
    mongodb = require('mongodb');


var MongoClient = require('mongodb').MongoClient; //2018新引用方式 使用中间层封装db增删改查
const DB_CONN_STR = '127.0.0.1:27017'; //新的引用地址

var app = express.createServer();

/**
 * 中间件
 */

app.use(express.bodyParser());
app.use(express.cookieParser());
app.use(express.session({
    secret: 'my secret'
}));
/**
 * 中间件-身份验证
 */
app.use(function(req, res, next) {
    if(req.session.loggedIn) {
        res.local('authenticated', true);
        let params = {
            _id:{ $oid: req.session.loggedIn}
        }
        console.log('把数据打出来', params)

        app.users.findOne(params, function(err, doc) {
            console.log('查找id', err)
            if(err) return next(err);
            res.local('me', doc);
            console.log('把查询的文档打印出来', doc)
            next()
        })
    } else {
        res.local('authenticated', false);
        next();
    }
})
/**
 * 指定视图选择
 */

app.set('view engine', 'jade');

app.set('view options', {
    layout: false
});

/**
 * 默认路由
 */

app.get('/', function (req, res) {
    console.log('根目录')
    res.render('index', {
        authenticated: false
    });
});

//页面路由层
app.get('/login', function (req, res) {
    console.log('登录')
    res.render('login',{signupEmail: false});
})
app.get('/login/:signupEmail', function (req, res) {
    console.log('登录')
    res.render('login', {
        signupEmail: req.params.signupEmail
    });
})


app.get('/signup', function (req, res) {
    res.render('signup')
})

//数据请求接口
//登录
app.post('/login', function (req, res) {
    let params = {
        email: req.body.user.email,
        password: req.body.user.password
    }
    app.users.findOne(params, function (err, doc) {
        //登录失败处理
        console.log('登录失败，发生了啥', err)
        if(err) return next(err);
        if(!doc) return res.send('<p>User not found, Go back and try again</p>');
        req.session.loggedIn = doc._id.toString();
        res.redirect('/')
    })
})
//注册
app.post('/signup', function (req, res) {
    console.log('注册')
    app.users.insert(req.body.user, function (err, doc) {
        if (err) return next(err);
        res.redirect('/login/' + doc[0].email)
    })
})
//登出
app.get('/logout', function (req, res) {
    console.log('登出', req)
    req.session.loggedIn = null;//清除登录态
    res.redirect('/');
})
/**
 * 连接数据库 TODO: 改写2018年express + mongodb  可以避免引用库过旧引起的bug
 */  
var server = new mongodb.Server('127.0.0.1', 27017)
new mongodb.Db('test-website', server).open(function (err, client) {
    if (err) {
        console.log('数据库连接失败', err)
        throw err;
    }
    console.log('\033[96m + \033[39m connected to mongodb');

    app.users = new mongodb.Collection(client, "users");
    //确保查表一定有索引
    client.ensureIndex('users', 'email', function (err) {
        console.log('查表错误',err)
        if (err) throw err;
        client.ensureIndex('users', 'password', function (err) {
            if (err) throw err;

            console.log('\033[96m + \033[39m ensured indexed')
        })

        /**
         * 监听
         */
        app.listen(3000, function () {
            console.log('mongoDB server is on port 3000')
        })
    })

})