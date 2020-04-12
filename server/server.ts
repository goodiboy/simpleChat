// const Koa = require('koa');
// const app = new Koa();
// const server = require('http').createServer(app.callback());
// const io = require('socket.io').listen(server);
// io.on('connection', data => {
//     console.log('连接成功');
// });
//
// server.listen(8888);

import * as Koa from 'koa';
import * as http from 'http';
import * as Socket from 'socket.io';

const app = new Koa();
const server = http.createServer(app.callback());
const io = Socket.listen(server);
server.listen(8888);

io.on('connection', data => {
    console.log('连接成功');
});


