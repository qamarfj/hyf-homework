// Log out the text Called after 2.5 seconds 2.5 seconds after the script is loaded.
const logLater = () => {
  setTimeout(() => {
    console.log("Called after 2.5 seconds");
  }, 2500);
};
window.addEventListener("load", logLater);

//.2 Create a function that takes 2 parameters: delay and stringToLog

function logAfterDelay(delay, stringToLog) {
  const delayTime = delay * 1000;
  let timer = setTimeout(() => {
    console.log(stringToLog);
    clearTimeout(timer);
  }, delayTime);
}
logAfterDelay(5, "This string log after 5 sceonds");
logAfterDelay(3, "This string log after 3 sceonds");
/*3 . Create a button in html. When clicking this button, use the function you created
 in the previous task to log out the text: Called after 5 seconds 5 seconds after the
 button is clicked.*/
const callDelayFuntion = () => logAfterDelay(5, "Called after 5 seconds");
document
  .querySelector("#btn-delay")
  .addEventListener("click", callDelayFuntion);

/*4.Create two functions and assign them to two different variables. One function logs out Earth, 
the other function logs out Saturn. Now create a new third function that has one parameter: planetLogFunction.
 The only thing the third function should do is call the provided parameter function. 
Try call the third function once with the Earth function and once with the Saturn function.*/

const earthLogger = () => console.log("Earth");
const satrunLogger = () => console.log("Saturn");
function planetLogFunction(functionToCall) {
  functionToCall();
}
planetLogFunction(earthLogger);
planetLogFunction(satrunLogger);
/*Create a button with the text called "Log location". When this button is clicked the location
 (latitude, longitude) of the user should be logged out using this browser api*/
document
  .querySelector("#btn-location")
  .addEventListener("click", logGeoLocation);

function logGeoLocation() {
  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log(latitude, longitude);
  }

  function error() {
    console.log("Unable to retrieve your location");
  }

  if (!navigator.geolocation) {
    console.log("Geolocation is not supported by your browser");
  } else {
    console.log("Locating…");
    navigator.geolocation.getCurrentPosition(success, error);
  }
}
/**Create a function called runAfterDelay. It has two parameters: delay and callback.
 *  When called the function should wait delay seconds and then call the provided callback function.
 * Try and call this function with different delays and different callback functions */
const runAfterDelay = (delay, callback) => {
  console.log("callback run afterr " + delay + " sec");
  setTimeout(callback, delay * 1000);
};
runAfterDelay(3, () => console.log("run aftr 3 sec"));
const runLater = () => console.log("run aftr 5 sec");
runAfterDelay(5, runLater);
function runAfter7() {
  console.log("run aftr 7 sec");
}
runAfterDelay(7, runAfter7);
/**Check if we have double clicked on the page. A double click is defined by two clicks within 0.5 seconds.
 *  If a double click has been detected, log out the text: "double click!" */

let numberOfclick = 0;
const logDoubleClick = () => {
  numberOfclick++;
  function logIfDouble() {
    if (numberOfclick > 1) {
      numberOfclick = 0;
      console.log("double click!");
    } else numberOfclick = 0;
  }
  setTimeout(logIfDouble, 500);
};
document.addEventListener("click", logDoubleClick);
/**Create a function called jokeCreator that has three parameters: shouldTellFunnyJoke - boolean,
 *  logFunnyJoke - function and logBadJoke - function. If you set tellFunnyJoke to true
 * it should call the logFunnyJoke function that should log out a funny joke. And vice versa. */
function jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke) {
  if (
    typeof shouldTellFunnyJoke === "boolean" &&
    typeof logFunnyJoke === "function" &&
    typeof logBadJoke === "function"
  ) {
    if (shouldTellFunnyJoke) logFunnyJoke();
    else logBadJoke();
  } else console.log("pleas call function with proper arguments");
}
function logFunnyJoke() {
  console.log("funny joke");
}
function logBadJoke() {
  console.log("bad joke");
}
jokeCreator(true, logFunnyJoke, logBadJoke);
jokeCreator(false, logFunnyJoke, logBadJoke);
