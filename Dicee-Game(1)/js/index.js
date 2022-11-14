let instructionsList = new Instructions('directions');
let instructionsBtn = document.querySelector(".nav-item");
let background = document.querySelector("main");
let winnerText = document.querySelector('h1');
let instructionsSec = document.querySelector('#alert');

// window.addEventListener('load', function(){
//   instructionsSec.hidden = true;
// });

// Dice 1
let randomNumber1 = Math.floor(Math.random() * 6 +1);//random number

const randomDiceImage = "dice" + randomNumber1 + ".png"//generates dice image

const randomImageSource = "images/" + randomDiceImage;//Shuffles images/dice1.png-dice6.png

const dice1 = document.querySelectorAll("img")[0];//changes image on refresh
dice1.setAttribute("src", randomImageSource);

// Dice 2

let randomNumber2 = Math.floor(Math.random() * 6 + 1);
const randomImageSource2 = "images/dice" + randomNumber2 + ".png";
const dice2 = document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

// Get Winner
function getWinner(){
  if(randomNumber1 < randomNumber2){
    winnerText.innerHTML= "Player 2 Wins!";
  }
  if(randomNumber1 > randomNumber2){
    winnerText.innerHTML= "Player 1 Wins!";
  }
  if(randomNumber1 === randomNumber2){
    winnerText.innerHTML= "Draw!";
  }
};
getWinner();

// Hide and Show Instructions



instructionsSec.addEventListener('click', (event) => {
  if (event.target.classList.contains('play-btn')) {
    instructionsList.hide();
  }
});
instructionsBtn.addEventListener('click', (event) => {
  instructionsList.render();
});


