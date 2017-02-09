module.exports = function(gameServer, client, viewData)
{
	var x = viewData.getInt8(1, true);
	var y = viewData.getInt8(2, true);
	// console.log('update client speed:', x, y);
	client.updatePlayer(x, y, gameServer);
}