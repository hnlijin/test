var GameServer = require('./GameServer');
var http = require('http');
var common = require('./common');

function MasterServer(selected) {
	this.selected = selected;

	this.config = {
        serverIP: "127.0.0.1",
        serverPort: 9001,
    };
}

module.exports = MasterServer;

MasterServer.prototype.start = function()
 {
	function onError(error) {
        if (error.syscall !== 'listen') {
            throw error;
        }

        var address = common.getLocalIp();

        // handle specific listen errors with friendly messages
        switch (error.code) {
            case 'EACCES':
                console.log('\u001B[31m[ERROR]\u001B[0m ' + address + ":" + MS.config.serverPort + ' requires elevated privileges');
                process.exit(1);
                break;
            case 'EADDRINUSE':
                console.log('\u001B[31m[ERROR]\u001B[0m ' + address + ":" + MS.config.serverPort + ' is already in use');
                process.exit(1);
                break;
            default:
                throw error;
        }
    }

    function onListening() {
        console.log('\u001B[31m[LOG]\u001B[0m: Web service runing on ' + common.getLocalIp() + ':' + MS.config.serverPort);
    };

    MS = this;

    this.httpServer = http.createServer();
    this.httpServer.listen(this.config.serverPort);
    this.httpServer.on('error', onError);
    this.httpServer.on('listening', onListening);
	this.httpServer.on('request', function(request, response)
	{
		response.write('welcome!');
		response.end();
	});
}
