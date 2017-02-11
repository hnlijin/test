function Mode() {
    this.ID = -1;
    this.name = "Blank";
}

module.exports = Mode;

// Override these

Mode.prototype.onServerInit = function() {
    // Called when the server starts
    this.gameServer.run = true;
};

Mode.prototype.onTick = function() {
    // Called on every game tick 
};

Mode.prototype.onChange = function() {
    // Called when someone changes the gamemode via console commands
};

Mode.prototype.onPlayerInit = function(player) {
    // Called after a player object is constructed
};