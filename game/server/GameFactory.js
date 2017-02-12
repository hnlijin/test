var DefaultMode = require('./modes')
var DefaultEntity = require('./entity')

var SeaEntity = require('./SeaWorld/entity')
var SeaMode = require('./SeaWorld/modes')

var getMode = function(modeId, gameServer) {
    var mode;
    switch (modeId) {
        case 1: // SeaWorld
            mode = new SeaMode.SeaWorld(gameServer);
            break;
        default: // game is default
            mode = new DefaultMode.Mode();
            break;
    }
    return mode;
};

var getEntity = function(entityId, id, client) {
    var entity;
    switch (entityId) {
        case 1:
            entity = new SeaEntity.Player(id, client);
            break;
        default: 
            entity = new DefaultEntity.Player(id, client);
    }
    return entity;
}

module.exports.getMode = getMode;
module.exports.getEntity = getEntity;