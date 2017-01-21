module.exports = {
    Mode: require('./Mode'),
    SeaWorld: require('./SeaWorld'),
    Player: require('./Player'),
};

var get = function(id) {
    var mode;
    switch (id) {
        case 1: // SeaWorld
            mode = new module.exports.SeaWorld();
            break;
        default: // game is default
            mode = new module.exports.SeaWorld();
            break;
    }
    return mode;
};

module.exports.get = get;

