const net = require('net');
const server = net.createServer();

const fs = require('fs');
server.on('connection', handleConnection);
server.listen(9000, () => {
    console.log('server listening to %j', server.address());
});

function handleConnection(conn) {
    const remoteAddressAndPort = `${conn.remoteAddress}:${conn.remotePort}`;
    console.log(`new client connection from ${remoteAddressAndPort}`);

    conn.on('data', (buffer) => {
        const textFileName = 'sample.txt';
        const data = buffer.toString();

        console.log(`Received from ${remoteAddressAndPort}:`, data)
        conn.write(`Got "${data.trim()}". Let me uppercase: "${data.trim().toUpperCase()
            }"`)

        fs.readFile(textFileName, 'utf8', (err, contents) => {
            if (err) {
                throw err;
            };
            conn.write(`\n${contents}\n`)
        });
    });
    conn.on('error', (error) => {
        console.log(`And Error occurred:`, error.message())
    });
    conn.on('close', () => {
        console.log(`Closed: ${remoteAddressAndPort}`);
    });
}

