const net = require('net');
const server = net.createServer(() => {}).listen(8080);
console.log('foo')

server.on('listening', () => {
    console.log('listening')
});