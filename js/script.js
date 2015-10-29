var SUITS = ['&spades;', '&hearts;', '&diams;', '&clubs;'];
var RANK = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
var DECK = [];

var player1 = document.getElementById('player1');
var player2 = document.getElementById('player2');
var start = document.getElementById('start');
var battle = document.getElementById('battle');
// var auto = document.getElementById('auto');
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
  shuffle(DECK);
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
//
// var currentHand1 = []
// var currentHand2 = []
//
// currentHand1.push(player1StartingDeck.value)
// currentHand1.push(player1hand.value)

var player1StartingDeck;
var player2StartingDeck;
var player1StartingHand;
var player2StartingHand;
var player1StartingHandValue;
var player2StartingHandValue;
var x;
var y;

function splitDeck(deck) {
  player1hand.push(deck.slice(0,26));
  player1StartingDeck = player1hand.pop();

  // var firstcard = player1StartingDeck[].value
  // player1StartingHand = player1StartingDeck.pop();
  // player1StartingHandValue = player1StartingHand.value;
  player2hand.push(deck.slice(26));
  player2StartingDeck = player2hand.pop();

  // player2StartingHand = play.pop();
  // player2StartingHandValue = player2StartingHand.value;

  ;

}








function compareHand() {

    x =  player1.pop()
    y player1.pop()
    s player1.pop()

    var x = player1StartingDeck[0];
    var y = player2StartingDeck[0];


    if (x.value > y.value) {
        player1.classList.toggle('enable');
        player1.innerHTML = 'Player 1 <span id="green">won</span>!' + '<br> Used ' + x.rank + ' of ' + x.suits + '<br> Player 1 has ' + player1StartingDeck.length + ' cards!';
        player2.innerHTML = 'Player 2 <span>lost</span>! <br> Played ' + y.rank + ' of ' + y.suits + '<br> Player 2 has ' + player2StartingDeck.length + ' cards!';
        console.log(x);

        var firstPlayer1 = player1StartingDeck.shift();
        var firstPlayer2 = player2StartingDeck.shift();

        player1StartingDeck.push(firstPlayer1);
        player1StartingDeck.push(firstPlayer2);




    } else {

        player2.classList.toggle('enable');
        player2.innerHTML = 'Player 2 <span id="green">won</span>!' + '<br> Used ' + y.rank + ' of ' + x.suits + '<br> Player 2 has ' + player2StartingDeck.length + ' cards!';
        player1.innerHTML = 'Player 1 <span>lost</span>! <br> Played ' + x.rank +  ' of ' + x.suits + '<br> Player 1 has ' + player1StartingDeck.length + ' cards!';
        console.log(y);


        var firstPlayer1 = player1StartingDeck.shift();
        var firstPlayer2 = player2StartingDeck.shift();

        player2StartingDeck.push(firstPlayer1);
        player2StartingDeck.push(firstPlayer2);

}
  //  else {
   //
  //       var firstPlayer1 = player1StartingDeck.shift();
  //       var firstPlayer2 = player2StartingDeck.shift();
   //
  //       player1StartingDeck.push(firstPlayer1);
  //       player1StartingDeck.push(firstPlayer2);
  //   //
  //   // }

}


function startGame() {
  buildDeck(SUITS, RANK);
  splitDeck(DECK);
}

function battleGame() {
  compareHand();
}

function autoGame () {

}

function populatePlayer1HTML () {

}


start.addEventListener('click', startGame);
battle.addEventListener('click', battleGame);
// player1draw.addEventListener('click', compareHand )
// player2.addEventListener('click', )
