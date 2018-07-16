const net = require('net');
const server = net.createServer();
let connections = [];

server.on('connection', handleConnection);
server.listen(9000, () => {
    console.log('server listening to %j', server.address());
});

function handleConnection(conn) {
    const remoteAddressAndPort = `${conn.remoteAddress}:${conn.remotePort}`;
    connections.push(conn);
    console.log(`new client connection from ${remoteAddressAndPort}; connections: ${connections.length}`);

    conn.on('data', (buffer) => {
        const textFileName = 'sample.txt';
        const data = buffer.toString();
        const now = new Date().toTimeString().substr(0, 8);
        const message = `${now} Got "${data.trim()}". Let me uppercase: "${data.trim().toUpperCase()}"\n`;
        console.log(`Received from ${remoteAddressAndPort} :`, data);
        // conn.write(message);
        connections
            .filter((connection) => conn !== connection)
            .map((connection) => {
                connection.write(message);
            });
    });
    conn.on('error', (error) => {
        console.log('An error occurred:', error.message);
    })
    conn.on('close', () => {
        console.log(`Closed: ${remoteAddressAndPort}`);
        connections = connections.filter((connection) => conn !== connection);
    });
}