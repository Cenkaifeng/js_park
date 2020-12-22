var http = require('http');
var serve = http.createServer(function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    })
    res.end('<marquee>Node listen 3000 test!</marquee>')
})

serve.listen(3000);
