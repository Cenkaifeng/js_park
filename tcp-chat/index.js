/**
 * 模块依赖
 */
var net = require('net');
var colors = require('colors');

var count = 0, //连接数
    users = {}
/**
 * 创建服务
 */
var server = net.createServer(function (conn) {
    conn.setEncoding('utf8')

    var nickname; //当前链接的用户名
    conn.write(
        '\n > welcome to ' + 'node-chat!'.green +
        '\n > ' + count + ' other people are connected at this time.' +
        '\n > please write your name and press enter:'
    );
    conn.on('data', function (data) {
        console.log(data);
        //删除回车符
        data = data.replace('\r\n', '');

        if (!nickname) { //对收到数据判断是否有用户名
            if (users[data]) {
                conn.write(colors.red(nickname + ' already in use. try again:'));
                return;
            } else {
                nickname = data;
                users[nickname] = conn; //将连接对象存入users键值对
                broadcast(colors.green(nickname + ' joined the room \n'), false);

            }
        } else { //如果存在用户名，将输入内容视作聊天消息
            for (var i in users) {
                // if (i != nickname) {
                broadcast(nickname + ':' + data + '\n', true);
                // }
            }

        }
    })
    conn.on('close', function () {
        count--;
        delete users[nickname]; //清除用户链接
        broadcast(colors.green(nickname + ' left the room \n'), false);

    })
    count++;
    //全体广播
    function broadcast(msg, exceptMyself) {
        for (var i in users) {
            if (!exceptMyself || i != nickname) { //向非当前用户的其他用户广播,同时区分聊天记录
                users[i].write(msg)
            }
        }
    }

})


/**
 * 监听
 */

server.listen(3000, function () {
    console.log('server listening on *:3000'.green)
})