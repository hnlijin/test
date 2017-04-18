var math = require("math");
var checker = require("./CardChecker")
var card = require("./Card")

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

gCards;
gPlayers;
gLandlord = -1; // 地主
gGameState = 0; // 游戏状态
gCurPlayerId = 0; // 当前玩家，其他为机器玩家
gPlayerIndex = 0;

function printCards(players)
{
	console.log("机器1:", players[1].length);
	console.log("机器2:", players[2].length);
	console.log("我的牌:", displayCard(players[0]));
	console.log("底牌:", players[3].length);
}

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
    case 'start':
    	console.log("创建牌...");
    	gCards = card.create()
    	console.log("洗牌...")
    	card.shuffleCard(gCards)
    	console.log("开始发牌...");
    	printCards(gCards);
    	gPlayers = card.deal();
    	console.log('随机地主...');
    	gLandlord = card.randomLandlord();
    	if (gLandlord == gCurPlayerId) {
    		console.log("恭喜你，您为地主")
    	}
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
