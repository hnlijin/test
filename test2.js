var math = require("math");
var checker = require("./CardChecker")
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

function displayCard(arr)
{
	var l = arr.length;
	var newArr = [];
	for (var i = 0; i < l; i++)
	{
		var c = math.floor(parseInt(arr[i]) / 4);
		newArr.push(c);
	}
	return newArr;
}

console.log("A:", displayCard(player[0]));
console.log("B:", displayCard(player[1]));
console.log("C:", displayCard(player[2]));

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
      var ret = checker.checkCard(arr);
      console.log("review:", arr)
      console.log("check result:", ret);
      break;
  }
  rl.prompt();
}).on('close', () => {
  console.log('再见!');
  process.exit(0);
});
