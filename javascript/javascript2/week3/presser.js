/*When the button is pressed it is about pressing either l or s on the keyboard.
 The user that has the highest number of keypresses after the time is up, wins 🎉*/
const timer = document.querySelector("#time-input");
const btnStartGame = document.querySelector("#start-game");
const btnResetGame = document.querySelector("#reset-game");
const displayWiner = document.querySelector("#display-winer");
const displayScount = document.querySelector("#display-scount");
const displayLcount = document.querySelector("#display-lcount");
const displayError = document.querySelector("#display-error");
let sCount = 0;
let lCount = 0;
let timerId;
const startGame = () => {
  sCount = 0;
  lCount = 0;
  btnStartGame.innerHTML = "Start Game Again";

  const stopGameLimit = parseInt(timer.value);
  if (stopGameLimit > 0) {
    //at start stage reset all display items
    displayError.innerHTML = "";
    displayLcount.innerHTML = "";
    displayScount.innerHTML = "";
    displayWiner.innerHTML = "";
    //at the end of time stop keypressed event listening  and call display result
    timerId = setTimeout(() => {
      document.removeEventListener("keypress", checkKey);
      showWiner();
      console.log("time is up");
    }, stopGameLimit * 1000);
    //display resulet
    function showWiner() {
      if (sCount > lCount) displayWiner.innerHTML = "🎉S🎉 is the Winer";
      else if (lCount > sCount) displayWiner.innerHTML = "🎉L🎉 is the Winer";
      else if (lCount === 0 && sCount === 0)
        displayWiner.innerHTML = "Game is Over. No key Pressed!";
      else displayWiner.innerHTML = "Game is Draw";
    }
    //which key pressed and update count accordingly
    function checkKey(event) {
      if (event.keyCode === 115) {
        sCount++;
        displayScount.innerHTML = sCount;
      } else if (event.keyCode === 108) {
        lCount++;
        displayLcount.innerHTML = lCount;
      }
    }
    //start listening keypress event
    document.addEventListener("keypress", checkKey);
  } else {
    displayError.innerHTML = "OOPS! Please Set Valid Timer";
    displayLcount.innerHTML = "";
    displayScount.innerHTML = "";
    displayWiner.innerHTML = "";
  }
};

//start game
btnStartGame.addEventListener("click", startGame);
//reset game
function reset() {
  if (timerId) clearTimeout(timerId);
  sCount = 0;
  lCount = 0;
  timer.value = "";

  displayError.innerHTML = "";
  displayLcount.innerHTML = "";
  displayScount.innerHTML = "";
  displayWiner.innerHTML = "";
}
btnResetGame.addEventListener("click", reset);
