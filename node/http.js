var http = require('http');
var qs = require('querystring');

http.createServer(function (req, res) {

    var body = '';
    req.on('data', function (chunk) { //接受请求
        body += chunk;
    })

    req.on('end', function () {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        }); //请求头；

        // res.write('Hi jojo')
        // res.end('Hi <b>DIO!</b>');
        console.log('\n got name \033[90m' + qs.parse(body).name + '\033[39m\n')
    })

}).listen(3000)