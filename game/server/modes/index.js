var SeaWorldModes = require("./../SeaWorld/modes")

module.exports = {
    Mode: require('./Mode'),
};

var get = function(id, gameServer) {
    var mode;
    switch (id) {
        case 1: // SeaWorld
            mode = new SeaWorldModes.SeaWorld(gameServer, id);
            break;
        default: // game is default
            mode = new SeaWorldModes.SeaWorld(gameServer, id);
            break;
    }
    return mode;
};

module.exports.get = get;

