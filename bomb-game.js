//Bomb-game finished: 15/02/2020

var bomb = Math.floor(Math.random() * 40) + 1;
var clicks = 0;
var squares = document.getElementsByClassName('squares');
var gameOver = document.querySelector('#start');
var gamePlaying = true;
var prevScore;
var prevScoreUI = document.querySelector("#prev-score");
var talkShit = document.querySelector('#talk-shit');


for(var i = 0; i < squares.length; i++){
  squares[i].addEventListener('click', function (){
    if(gamePlaying){
    this.classList.add('black');
     clicks++;

     if(clicks > 5){
       talkShit.textContent = "Past 5 now!";
      } if (clicks > 10){
      talkShit.textContent = "You got past 10... Be careful!";
     } if(clicks > 15) {
      talkShit.textContent = "That's 15 keep going!";
     } if(clicks > 20) {
      talkShit.textContent = "Over 20! that bomb could be anywhere";
     } if(clicks > 25) {
      talkShit.textContent = "Past 25 not many left!";
     } if(clicks > 30){
      talkShit.textContent = "OMG you passed thirty!";
     };

     if(clicks === bomb){
      this.innerHTML = "<img id ='bomb-pic' src = 'bomb2.jpg'>";
      gameOver.innerHTML = '<strong>BOOM! You died after ' + clicks + ' clicks!</strong>';
      gameOver.classList.add('game-over');
      gamePlaying = false; 
      prevScore = clicks;
      };
     
if(clicks > prevScore){
        talkShit.textContent = "Wow! you beat the previous score";}
  }; 
  
});
};

document.getElementById('reset-btn').addEventListener('click', function(){
bomb = Math.floor(Math.random() * 40) + 1;
gameOver.textContent = "Where's the bomb?";
gameOver.classList.remove('game-over');
clicks = 0;
gamePlaying = true;
prevScoreUI.textContent = ' ' + prevScore;
talkShit.textContent = "Can you beat the previous score?";
for(var i = 0; i < squares.length; i++){
  squares[i].classList.remove('black');
  squares[i].innerHTML = ""; 
  
};

});