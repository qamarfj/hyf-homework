/*When the button is pressed it is about pressing either l or s on the keyboard.
 The user that has the highest number of keypresses after the time is up, wins 🎉*/
const timer = document.querySelector("#time-input");
const btnStartGame = document.querySelector("#start-game");
const btnResetGame = document.querySelector("#reset-game");
const displayWiner = document.querySelector("#display-winer");
const displayScount = document.querySelector("#display-scount");
const displayLcount = document.querySelector("#display-lcount");
const displayError = document.querySelector("#display-error");
const countDownField = document.getElementById("count-down");
let sCount = 0;
let lCount = 0;
let timerId, countDown;
const startGame = () => {
  sCount = 0;
  lCount = 0;
  countDown = parseInt(timer.value);
  btnStartGame.innerHTML = "Start Game Again";
  //make game start , reset buttons and input disable
  timer.readOnly = true;
  btnStartGame.disabled = true;
  btnResetGame.disabled = true;
  const stopGameLimit = parseInt(timer.value);
  if (stopGameLimit > 0) {
    //at start stage reset all display items
    displayError.innerHTML = "";
    displayLcount.innerHTML = "";
    displayScount.innerHTML = "";
    displayWiner.innerHTML = "";

    const countDownIntravell = setInterval(() => {
      countDown--;
      countDownField.textContent = countDown;
    }, 1000);

    //at the end of time stop keypressed event listening  and call display result

    timerId = setTimeout(() => {
      clearInterval(countDownIntravell);
      document.removeEventListener("keypress", checkKey);
      showWiner();
      console.log("time is up");
    }, stopGameLimit * 1000);
    //display resulet
    function showWiner() {
      //enable rest button and input again
      btnResetGame.disabled = false;

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
    //reset button enable again
    btnResetGame.disabled = false;
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
  //enable input and start game button
  timer.readOnly = false;
  btnStartGame.disabled = false;

  displayError.innerHTML = "";
  displayLcount.innerHTML = "";
  displayScount.innerHTML = "";
  displayWiner.innerHTML = "";
}
btnResetGame.addEventListener("click", reset);
