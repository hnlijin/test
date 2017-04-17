var math = require("math");

module.exports = {
	checkCard: checkCard,
	isDZ: isDZ,
	isZD: isZD,
	isSD: isSD,
	isLD: isLD,
	isSZ: isSZ
};

function checkCard(cards)
{
	var ret = false;
	var l = cards.length;
	var arr = [];
	for (var i = 0; i < l; i++)
	{
		arr[i] = math.floor(parseInt(cards[i]) / 4);
	}

	if (l == 1) {
		var c = arr[0]
		if (c >= 0) {
			return;
		}
		return false;
	} else if (l == 2) {
		ret = isDZ(arr);
	} else if (l == 3) {
		ret = isSD(arr, 0);
	} else if (l == 4) {
		ret = isZD(arr);
		if (ret == false) {
			ret = isSD(arr, 1);
		}
	} else if (l == 5) {
		ret = isSZ(arr);
		if (ret == false) {
			ret = isSD(arr, 2);
		}
	} else if (l == 6) {
		ret = isLD(arr);
		if (ret == false) {
			ret = isSZ(arr);
		}
		if (ret == false)
		{
			ret = isSD(arr, 3);
		}
	} else {
		ret = isSZ(arr);
	}
	return ret;
}

// 对子
function isDZ(arr)
{
	var l = arr.length;
	if (l < 2 || l > 2) {
		return false;
	}
	var ret = true;
	var c1 = arr[0];
	var c2 = arr[1];
	if (c1 != c2) {
		ret = false;
	}
	return ret;
		
}

// 炸弹
function isZD(arr)
{
	var l = arr.length;
	if (l < 4 || l > 4) {
		return false;
	}
	var first = null;
	var ret = true;
	for (var i = 0; i < l; i++)
	{
		var c = arr[i];
		if (i == 0) {
			first = c;
		} else if(first != c) {
			ret = false;
			break;
		}
	}
	return ret;
}

// 三带几
function isSD(arr, ji)
{
	var l = arr.length;
	if (l < 3 || l > 6) {
		return false;
	}
	var ret = true;
	var t = {};
	var k1 = null;
	var k2 = null;
	for (var i = 0; i < l; i++)
	{
		var c = arr[i];
		if (k1 == null) {
			k1 = c;
			t[k1] = 1;
		} else if (k1 == c) {
			t[k1] += 1;
		} else if (k2 == null) {
			k2 = c;
			t[k2] = 1;
		} else if (k2 == c) {
			t[k2] += 1;
		} else {
			ret = false;
			break;
		}
	}
	if (ret) {
		if (k1 == null && k2 == null) {
			ret = false;
		} else {
			var l1 = t[k1] ? t[k1] : 0;
			var l2 = t[k2] ? t[k2] : 0;
			if (l1 == ji && k2 == 3) {
			} else if (l1 == 3 && l2 == ji) {
			} else {
				ret = false;
			}
		}
	}
	return ret;
}

// 连对
function isLD(arr)
{
	var l = arr.length;
	if (l < 6) {
		return false;
	}
	if (l % 2 == 1) {
		return false;
	}
	var ret = true;
	var first = null;
	for(var i = 0; i < l; i += 2)
	{
		var c1 = arr[i];
		var c2 = arr[i + 1];
		if (i == 0) {
			if (c1 != c2) {
				ret = false;
				break;
			}
			first = c1;
		} else {
			first += 1;
			if (first != c1 || first != c2) {
				ret = false;
				break;
			}
		}
	}
	return ret;
}

// 顺子
function isSZ(arr)
{
	var l = arr.length;
	if (l < 5) {
		return false;
	}
	var ret = true;
	var first = null;
	for (var i = 0; i < l; i++) {
		var c = arr[i];
		if (first == null) {
			first = c
		} else {
			first += 1;
			if (first != c) {
				ret = false;
				break;
			}	
		}
	}
	return ret;
}