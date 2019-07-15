console.log('Up and running!');
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [ ];

function checkForMatch (){
	if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
	} 
	else {
  console.log("Sorry, try again.");
	}
}

function flipCard (cardId) {
// 	cardsInPlay.push(cardOne);
// 	cardsInPlay.push(cardTwo);

// if (cardsInPlay.length === 2) {
// 	if (cardOne === cardTwo) {
// 		alert("You found a match!");
// 	}
// 		else {
// 			alert("Sorry, try again.");
// 		}
// 	}
	console.log("User flipped " + cards[cardId]);
	cardsInPlay.push(cards[cardId]);

	checkForMatch();
}
flipCard (0);
flipCard (2);
