var express = require('express');
var sio = require('socket.io');

/**
 * 创建app实例
 */

var app = express.createServer(
    express.bodyParser(),
    express.static('public')
);

/**
 * 绑定sio 到app
 */
var io = sio.listen(app);

// var ws = wsio.attach(app);

/**
 * Serve your code
 */

/**
 * Listening on connections 监听客户端socket
 */

io.sockets.on('connection', function (socket) {
    console.log('a user connected');

    socket.on("disconnect", function () {
        console.log("a user go out");
    });

    socket.on('message', function (msg) {
        console.log('\033[96m ogt: \033[39m' + msg)
        // socket.send('pong')
        io.emit("message", msg);
    });
});

/**
 * 监听
 */

app.listen(3000, function () {
    console.log('listen is on port 3000')
});