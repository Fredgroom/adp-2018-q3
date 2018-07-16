const net = require('net');
const server = net.createServer();

server.on('connection', handleConnection);
server.listen(9000, () => {
  console.log('server listening to %j', server.address());
});

function handleConnection(conn) {
    const remoteAddressAndPort = `${conn.remoteAddress}:${conn.remotePort}`;
    console.log(`new client connection from ${remoteAddressAndPort}`);
    conn.on('data', (buffer) => {
        console.log(`Received from ${remoteAddressAndPort}:`, buffer.toString())
    });
    conn.on('error', (error) => {
        console.log(`And Error occorred:`, error.message())
    });
    conn.on('close', () => {
        console.log(`Closed: ${remoteAddressAndPort}`);
    });
}

