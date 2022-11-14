const directions =  `<h2 class="alert-heading">The Dicee Game!</h2>
<h4>🎲 How to Play 🎲</h4>
<ul>
  <li>There are two die, one for player 1 and one for player 2</li>
  <li>Refresh your screen to roll the die</li>
  <li>Highest roll wins, same rolls equal a draw (no winner)</li>
  <li>Refresh screen again to play until your score is settled!</li>
</ul>
<button type="button" class="play-btn">Play!</a></button>`;

class Instructions {
    constructor() {
    }


render() {
   let instructionsBox = document.querySelector("#alert");
    instructionsBox.innerHTML = directions;
    instructionsBox.hidden = false;
    instructionsBox.style.backgroundColor= "#c3e6cb";
    background.style.filter = 'blur(4px)';
}

hide() {
  let instructionsBox = document.querySelector("#alert");
    instructionsBox.hidden = true;
    background.style.filter = 'none';
}
}
