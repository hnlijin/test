var os = require('os');

var common = {};
module.exports = common;

common.WS = '258EAFA5-E914-47DA-95CA-C5AB0DC85B11';

common.getLocalIp = function()
{
	var IPv4 = "127.0.0.1";
	var netWorkInfo = os.networkInterfaces();
	var netInfo = netWorkInfo.en0; // Mac OS

	// console.log("log: getLocalIp:", netWorkInfo);

	if (netInfo == null)
	{
		netInfo = netWorkInfo.wlan0; // linux
	}

	if (netInfo == null)
	{
		// netInfo = netWorkInfo.rmnet_data0;
	}

	if (netInfo != null)
	{
		for(var i = 0; i < netInfo.length; i++)
		{  
		    if(netInfo[i].family=='IPv4')
		    {  
		        IPv4 = netInfo[i].address;
		    }
		}
	}
	
	return IPv4;
}

common.handshake = function(key, client)
{
    if (client.writable)
    {
        var acceptKey = crypto.createHash("sha1").update(key + common.WS).digest('base64')
        client.write('HTTP/1.1 101 Switching Protocols\r\n');
        client.write('Upgrade: websocket\r\n');
        client.write('Connection: Upgrade\r\n');
        client.write('Sec-WebSocket-Accept: ' + acceptKey + '\r\n');
        client.write('\r\n');
    }
}