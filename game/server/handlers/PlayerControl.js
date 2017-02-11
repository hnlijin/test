module.exports = function(gameServer, client, viewData)
{
	var x = viewData.getInt8(1, true);
	var y = viewData.getInt8(2, true);
	client.onUpdateSpeed(x, y, gameServer);
}