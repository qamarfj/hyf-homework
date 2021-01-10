//by using .then
{
  const redBox = document.querySelector("ul.marks li:nth-child(1)");
  const blueBox = document.querySelector("ul.marks li:nth-child(2)");
  const greenBox = document.querySelector("ul.marks li:nth-child(3)");
  const targetToMove = {
    red: {
      x: 20 - parseInt(redBox.style.left),
      y: 300 - parseInt(redBox.style.top),
    },
    blue: {
      x: 400 - parseInt(blueBox.style.left),
      y: 300 - parseInt(blueBox.style.top),
    },
    green: {
      x: 400 - parseInt(greenBox.style.left),
      y: 20 - parseInt(greenBox.style.top),
    },
  };

  function translateOneByOne() {
    moveElement(redBox, targetToMove.red)
      .then(() => {
        console.log("RED Element has been moved");
        moveElement(blueBox, targetToMove.blue).then(() => {
          console.log("Blue Element has been moved");
          moveElement(greenBox, targetToMove.green).then(() => {
            console.log("Greeen Element has been moved");
          });
        });
      })
      .catch((error) => console.log(error));
  }
  /**
   *z zuhairtaha commented, You can also return a promise for each box and continue chaining. Similar to this
   * function translateOneByOne() {
  moveElement(red, target.red)
    .then(() => {
      console.log('red moved');
      return moveElement(blue, target.blue);
    })
    .then(() => {
      console.log('blue moved');
      return moveElement(green, target.green);
    })
    .then(() => {
      console.log('green moved');
      return;
    });
// ...
} */
  translateOneByOne();
  //translateAllAtOnce();
  function translateAllAtOnce() {
    Promise.all([
      moveElement(redBox, targetToMove.red),
      moveElement(blueBox, targetToMove.blue),
      moveElement(greenBox, targetToMove.green),
    ])
      .then(() => {
        console.log("RED Element has been moved");
        console.log("Blue Element has been moved");
        console.log("Greeen Element has been moved");
      })
      .catch((err) => console.log("error", err));
  }
}
