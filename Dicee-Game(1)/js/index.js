let playButton = document.querySelector(".btn");
let instructions = document.querySelector(".alert");
let instructionsBtn = document.querySelector(".nav-item");
let background = document.querySelector("main");
let winnerText = document.querySelector('h1');

// On Load
window.addEventListener('load', function(){
  instructions.hidden = true;
});

// Hide and Show Instructions
playButton.addEventListener('click', function(){
  instructions.hidden = true;
  background.style.filter = 'none';
});
instructionsBtn.addEventListener('click', function(){
  instructions.hidden= false;
  background.style.filter = 'blur(4px)';
});


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
