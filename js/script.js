var SUITS = ['&spades;', '&hearts;', '&diams;', '&clubs;'];
var RANK = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
var DECK = [];

var player1 = document.getElementById('player1');
var player2 = document.getElementById('player2');
var start = document.getElementById('start');
var reset = document.getElementById('reset');
var auto = document.getElementById('auto');
var player1draw = document.getElementById('player1draw');


var buildDeck = function(suits, rank) {
  for (var i = 0; i < SUITS.length; i++) {
    for (var j = 0; j < RANK.length; j++) {
      DECK.push({
        suits: suits[i],
        rank: rank[j],
        value: j
      })
    }
  }
}

function shuffle(array) {
  var m = array.length,
    t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  return array;
};

var player1hand = [];
var player2hand = [];

function splitDeck(deck) {
  for (var i = 0, j = 0; i < DECK.length, j < DECK.length; i++, j++) {
    player1hand.push(DECK[i]);
    shuffle(DECK);
    player2hand.push(DECK[j]);
    shuffle(DECK);
  }
}

function compareHand(player1hand, player2hand) {
  var player1StartingHand = player1hand.pop();
  var player2StartingHand = player2hand.pop();
  var html = "";


    if (player1StartingHand.value > player2StartingHand.value) {
        player1.classList.toggle('enable');
        player1.innerHTML = 'Player 1 <span>won</span>!' + '\n Used ' + player1StartingHand.rank + ' of ' + player1StartingHand.suits;
        player2.innerHTML = 'Player 2 played ' + player2StartingHand.rank + ' of ' + player2StartingHand.suits;
        console.log(player1hand.value);

    } else if (player1StartingHand.value < player2StartingHand.value) {
        player2.classList.toggle('enable');
        player2.innerHTML = 'Player 2 <span>won</span>!' + '\n Used ' + player2StartingHand.rank + ' of ' + player2StartingHand.suits;
        player1.innerHTML = 'Player 1 played ' + player1StartingHand.rank +  ' of ' + player1StartingHand.suits;
        console.log(player2hand.value);

    } else {
        player1.innerHTML = 'Draw!';
        player2.innerHTML = 'Draw!';
    }

  // for (var i = 0; i < player1hand.length && player2hand.length; i++) {
  //   if (player1hand[i].value > player2hand[i].value) {
  //     console.log('Player 1 value: ' + player1hand[i].value);
  //     console.log('Player 1 won the round!');
  //   } else if (player1hand[i].value < player2hand[i].value) {
  //
  //     console.log('Player 2 value: ' + player2hand[i].value);
  //     console.log('Player 2 won the round!');
  //     player1hand.splice(0,1);
  //     player2hand.splice(0,1);
  //   } else {
  //     console.log('Draw!');
  //     console.log('Player 1 value: ' + player1hand[i].value + '\n' + 'Player 2 value :' + player2hand[i].value);
  //     player1hand.splice(0,1);
  //     player2hand.splice(0,1);
  //   }
  // }
}


function startGame() {
  buildDeck(SUITS, RANK);
  splitDeck(player1hand, player2hand);
  compareHand(player1hand,player2hand);
}

function resetGame() {

}

function autoGame () {

}

function populatePlayer1HTML () {
}


start.addEventListener('click', startGame);
// player1draw.addEventListener('click', compareHand )
// player2.addEventListener('click', )
