console.log('Up and running!');
var cards = ["queen", "queen", "king", "king"];
var cardOne = cards[0];
var cardTwo = cards[2];
var cardThree = 'queen';
var cardFour = 'king';
console.log('User Flipped ' + cardOne);
console.log('User Flipped ' + cardTwo);
var cardsInPlay = [ ];
cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);
if (cardsInPlay.length === 2) {
	if (cardOne === cardTwo) {
		alert("You found a match!");
	}
		else {
			alert("Sorry, try again.");
		}

	}

