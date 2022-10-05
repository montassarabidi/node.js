const {createServer} = require('http');
const server = createServer ((request ,response) => {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write('<h1>Hello Node!!!!</h1>\n');
    return response.end();
});
server.listen(3000);
