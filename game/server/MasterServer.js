var http = require('http');
var common = require('./common');
var webapp = require('./web/app');

function MasterServer(gameServer, playerServer) {
	this.gameServer = gameServer;
	this.playerServer = playerServer;

	this.config = {
        serverPort: 9000,
        appVersion: 0,
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

    webapp.set('port', this.config.serverPort);
    webapp.setMaster(MS);

    this.httpServer = http.createServer(webapp);
    this.httpServer.listen(this.config.serverPort);
    this.httpServer.on('error', onError);
    this.httpServer.on('listening', onListening);
}
