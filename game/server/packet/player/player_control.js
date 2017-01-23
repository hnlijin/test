module.exports = function(gameServer, client, viewData)
{
	var x = viewData.getUint8(1, true);
	var y = viewData.getUint8(2, true);
	console.log('update pos:', x, y);
	client.updatePlayer(x, y);
}