var math = require("math");

module.exports = {
	create: create,
	shuffleCard: shuffleCard,
	randomLandlord: randomLandlord,
	deal: deal
};

// 创建牌
function create()
{
	var max = 53;
	var min = 0;
	var cards = []
	for (var i = min; i <= max; i++)
	{
		cards[i] = i;
	}
	return cards;
}

// 随机地主
function randomLandlord()
{
	var r = math.floor(3 * math.random());
	return r;
}

// 洗牌
function shuffleCard(cards)
{
	for (var i = 0; i <= cards.length; i++)
	{
		var n1 = cards[i]
		var r = math.floor(l * math.random());
		var n2 = cards[r];
		cards[r] = n1;
		cards[i] = n2;
	}
}

// 发牌
function deal()
{
	var players = {}
	players[0] = [];
	players[1] = [];
	players[2] = [];
	players[3] = [];

	for (var i = 0; i < 3; i++)
	{
		var l = cards.length
		var r = math.floor(l * math.random());
		var c = cards.splice(r, 1)
		players[3].push(c);
	}

	var l = cards.length;
	for (var i = 0; i < l; i++)
	{
		var k = i % 3;
		players[k].push(cards[i]);
	}

	return players;
}