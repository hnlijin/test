var os = require('os');

var common = {};
module.exports = common;

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