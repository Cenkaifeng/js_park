const WebSocket = require('ws');
const wss = new WebSocket.Server({port: 8686});

wss.on('connection', ws => {
    console.log('A visitor has came');

    ws.on('message' , data => {
        ws.send(`data from server: ${data.toString()}`)
    });

    ws.onclose = _ => {
        console.log('A visitor leaving');
    }

    ws.onerror = (err) => {
        console.log('error', err)
    }
})