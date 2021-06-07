const {EventEmitter } = require('events');
const event = new EventEmitter();

event.on('eventName', value => {
    console.log('eventName 触发：', value);
})

event.emit('eventName', 'Hello, eventName')