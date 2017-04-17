var math = require("math");
var max = 53;
var min = 0;
var cards = []
for (var i = min; i <= max; i++)
{
	cards[i] = i;
}
for (var i = min; i <= max; i++)
{
	var n1 = cards[i]
	var r = math.floor((max - min) * math.random() + min);
	var n2 = cards[r];
	cards[r] = n1;
	cards[i] = n2;
}
var player = {}
player[0] = [];
player[1] = [];
player[2] = [];
for (var i = min; i <= max; i++)
{
	var k = i % 3;
	player[k].push(cards[i]);
}

function checkCard(arr)
{
	var ret = false;
	var l = arr.length;
	if (l == 1) {
		var c = math.floor(parseInt(arr[0]) / 4);
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
		ret = isLZ(arr);
		if (ret == false) {
			ret = isSD(arr, 2);
		}
	} else if (l == 6) {
		ret = isLD(arr);
		if (ret == false) {
			ret = isLZ(arr);
		}
		if (ret == false)
		{
			ret = isSD(arr, 3);
		}
	} else {
		ret = isLZ(arr);
	}
	return ret;
}

function isDZ(arr)
{
	var l = arr.length;
	if (l < 2 || l > 2) {
		return false;
	}
	var ret = true;
	var c1 = math.floor(parseInt(arr[0]) / 4);
	var c2 = math.floor(parseInt(arr[1]) / 4);
	if (c1 != c2) {
		ret = false;
	}
	return ret;
		
}

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
		var c = math.floor(parseInt(arr[i]) / 4);
		if (i == 0) {
			first = c;
		} else if(first != c) {
			ret = false;
			break;
		}
	}
	return ret;
}

function isSD(arr, ji)
{
	var l = arr.length;
	if (l < 4 || l > 6) {
		return false;
	}
	var ret = true;
	var t = {};
	var k1 = null;
	var k2 = null;
	for (var i = 0; i < l; i++)
	{
		var c = math.floor(parseInt(arr[i]) / 4);
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
		if (k1 == null || k2 == null) {
			ret = false;
		} else if (t[k1] == ji && t[k2] == 3) {
		} else if (t[k1] == 3 && t[k2] == ji) {
		} else {
			ret = false;
		}
	}
	return ret;
}

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
		var c1 = math.floor(parseInt(arr[i]) / 4);
		var c2 = math.floor(parseInt(arr[i + 1]) / 4);
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

function isLZ(arr)
{
	var l = arr.length;
	if (l < 5) {
		return false;
	}
	var ret = true;
	var first = null;
	for (var i = 0; i < l; i++) {
		var c = math.floor(parseInt(arr[i]) / 4);
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

console.log("A:", player[0]);
console.log("B:", player[1]);
console.log("C:", player[2]);

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '请输入> '
});

rl.prompt();

rl.on('line', (line) => {
  switch(line.trim()) {
    case 'exit':
      console.log('bye!');
      process.exit(0);
      break;
    default:
      var str = line.trim();
      var arr = str.split(" ");
      var ret = checkCard(arr);
      console.log("review:", arr)
      console.log("check result:", ret);
      break;
  }
  rl.prompt();
}).on('close', () => {
  console.log('再见!');
  process.exit(0);
});
