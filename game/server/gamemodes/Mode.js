function Mode() {
    this.ID = -1;
    this.name = "Blank";
}

module.exports = Mode;

// Override these

Mode.prototype.onServerInit = function(gameServer) {
    // Called when the server starts
    gameServer.run = true;
};

Mode.prototype.onTick = function(gameServer) {
    // Called on every game tick 
};

Mode.prototype.onChange = function(gameServer) {
    // Called when someone changes the gamemode via console commands
};

Mode.prototype.onPlayerInit = function(player) {
    // Called after a player object is constructed
};