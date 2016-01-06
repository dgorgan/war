var SUITS = ['&spades;', '&hearts;', '&diams;', '&clubs;'];
var RANK = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
var DECK = [];

var player1 = document.getElementById('player1');
var player2 = document.getElementById('player2');
var start = document.getElementById('start');
var battle = document.getElementById('battle');
var shuffled = document.querySelector('p');

var buildDeck = function(suits, rank) {
  for (var i = 0; i < SUITS.length; i++) {
    for (var j = 0; j < RANK.length; j++) {
      DECK.push({
        suits: suits[i],
        rank: rank[j],
        value: j
      });
    }
  }
  shuffle(DECK);
};

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
}

var player1hand = [];
var player2hand = [];
//
// var currentHand1 = []
// var currentHand2 = []
//
// currentHand1.push(player1StartingDeck.value)
// currentHand1.push(player1hand.value)
var tempX = [];
var tempY = [];
var winningPlayerDeck;
var player1StartingDeck;
var player2StartingDeck;
var player1StartingHand;
var player2StartingHand;
var player1StartingHandValue;
var player2StartingHandValue;
var x;
var y;

function splitDeck(deck) {
  player1hand.push(deck.slice(0, 26));
  // player1hand = (deck.slice(0,26));
  player1StartingDeck = player1hand.pop();

  // var firstcard = player1StartingDeck[].value
  // player1StartingHand = player1StartingDeck.pop();
  // player1StartingHandValue = player1StartingHand.value;
  player2hand.push(deck.slice(26));
  player2StartingDeck = player2hand.pop();

  // player2StartingHand = play.pop();
  // player2StartingHandValue = player2StartingHand.value;
}



// battleArena = {
//   Deck1: [],
//   Deck2: [],
//   play: function() {
//     // pull  card from GameDeck1 -> Deck1
//     Deck1 += GameDeck1.shift();
//     // pull card GameDeck2 -> Deck2
//
//     this.compare(Deck1[0], Deck2[0]);
//
//     return spoilsOfWar;
//
//   },
//   compare: function() {
//     x = Deck1[0];
//     if (Deck1[0].value > y.value) {} else {
//       war();
//     }
//   },
//   war: function() {
//
//   }
//   render: //new view for war battle or regular view for regular battle
// }



function compareHand() {



  var x = player1StartingDeck[0];
  var y = player2StartingDeck[0];


  if (x.value > y.value) {
    var firstPlayer1 = player1StartingDeck.shift();
    var firstPlayer2 = player2StartingDeck.shift();

    player1StartingDeck.push(firstPlayer1);
    player1StartingDeck.push(firstPlayer2);

    player1.classList.toggle('enable');

    player1.innerHTML = 'Player 1 <span id="green">won</span>!' + '<br> Used '
    + x.rank + ' of ' + x.suits + '<br> Player 1 has ' + player1StartingDeck.length + ' cards!';

    player2.innerHTML = 'Player 2 <span>lost</span>! <br> Played ' + y.rank + ' of ' + y.suits +
    '<br> Player 2 has ' + player2StartingDeck.length + ' cards!';

    console.log(x);






  } else if (x.value < y.value) {
    var firstPlayer1 = player1StartingDeck.shift();
    var firstPlayer2 = player2StartingDeck.shift();

    player2StartingDeck.push(firstPlayer1);
    player2StartingDeck.push(firstPlayer2);

    player2.classList.toggle('enable');

    player2.innerHTML = 'Player 2 <span id="green">won</span>!' + '<br> Used '
    + y.rank + ' of ' + x.suits + '<br> Player 2 has ' + player2StartingDeck.length + ' cards!';

    player1.innerHTML = 'Player 1 <span>lost</span>! <br> Played ' + x.rank + ' of '
     + x.suits + '<br> Player 1 has ' + player1StartingDeck.length + ' cards!';

    console.log(y);






  } else {
    player1.innerHTML = "Draw!";
    player2.innerHTML = "Draw!";

    war();
    renderDraw();


      if (x.value > y.value) {
        player1StartingDeck = player1StartingDeck.concat(winningPlayerDeck);
        player1.innerHTML = 'Player 1 <span id="green">won</span> war!!' + '<br> Used '
         + x.rank + ' of ' + x.suits + '<br> Player 1 has ' + player1StartingDeck.length + ' cards!';
        player2.innerHTML = 'Player 2 <span>lost</span> war! <br> Played ' + y.rank + ' of '
         + y.suits + '<br> Player 2 has ' + player2StartingDeck.length + ' cards!';

      } else {
        player2StartingDeck = player2StartingDeck.concat(winningPlayerDeck);
        player2.innerHTML = 'Player 2 <span id="green">won</span>! war!' + '<br> Used '
         + y.rank + ' of ' + x.suits + '<br> Player 2 has ' + player2StartingDeck.length + ' cards!';
        player1.innerHTML = 'Player 1 <span>lost</span> war! <br> Played ' + x.rank + ' of '
        + x.suits + '<br> Player 1 has ' + player1StartingDeck.length + ' cards!';
      }




    // player1StartingDeck.push(firstPlayer1);
    // player1StartingDeck.push(firstPlayer2);

  }
}



function war() {
  for (var i = 0; i < 4; i++) {
    var tempCardX = player1StartingDeck.shift();


    tempX.push(tempCardX);
    var tempCardY = player2StartingDeck.shift();
    tempY.push(tempCardY);
  }
  winningPlayerDeck = tempY.concat(tempX)
}

// function renderDraw () {
//   var player1card1 = document.createElement('div');
//   player1card1.id = "player1card1";
//   var player1card2 = document.createElement('div');
//   player1card2.id = "player1card2";
//   var player1card3 = document.createElement('div');
//   player1card3.id = "player1card3";
//   var player1card4 = document.createElement('div');
//   player1card4.id = "player1card4";
//
//   var player2card1 = document.createElement('div');
//   player2card1.id = "player2card1";
//   var player2card2 = document.createElement('div');
//   player2card2.id = "player2card2";
//   var player2card3 = document.createElement('div');
//   player2card3.id = "player2card3";
//   var player2card4 = document.createElement('div');
//   player2card4.id = "player2card4";
//
//   var tieDiv = document.createElement('div');
//   tieDiv.id = "tieDiv"
//
//   var board = document.getElementById('board');
//   document.getElementById('player1').style.display = "none";
//   document.getElementById('player2').style.display = "none";
//   board.appendChild(tieDiv);
//
//   tieDiv.appendChild(player1card1)
//   tieDiv.appendChild(player1card2)
//   tieDiv.appendChild(player1card3)
//   tieDiv.appendChild(player1card4)
//
//   tieDiv.appendChild(player2card1)
//   tieDiv.appendChild(player2card2)
//   tieDiv.appendChild(player2card3)
//   tieDiv.appendChild(player2card4)
// }



function startGame() {
  shuffled.classList.add('enable');
  shuffled.textContent = "Shuffled! Please click battle to begin.";
  buildDeck(SUITS, RANK);
  splitDeck(DECK);
}

function battleGame() {
  compareHand();
}

function autoGame() {

}

function populatePlayer1HTML() {

}


start.addEventListener('click', startGame);
battle.addEventListener('click', battleGame);
// player1draw.addEventListener('click', compareHand )
// player2.addEventListener('click', )
