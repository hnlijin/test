module.exports = function(gameServer, client, viewData)
{
	var name = "";
	var len = viewData.getUint8(1, true);
	for (var i = 0; i < len; i += 1) {
		var charCode = viewData.getUint16(i * 2 + 2, true);
        if (charCode == 0) {
            break;
        }
        name += String.fromCharCode(charCode);
	}
	client.name = name
	
	var newPlayer = gameServer.addPlayer(client);

	console.log("Join Game:", newPlayer.id, name, len);
}