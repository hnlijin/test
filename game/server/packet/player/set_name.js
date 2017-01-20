module.exports = function(gameServer, client, viewData)
{
	var name = "";
	var len = viewData.getUint8(1, true);
	for (var i = 2; i < len; i += 2)
	{
		var charCode = viewData.getUint16(i, true);
        if (charCode == 0) {
            break;
        }
        name += String.fromCharCode(charCode);
	}
	client.name = name

	console.log("set name succ!", name);
}