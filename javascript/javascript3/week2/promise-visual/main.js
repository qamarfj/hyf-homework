//by Async await
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
  async function translateOneByOne() {
    try {
      await moveElement(redBox, targetToMove.red);
      console.log("RED Element has been moved");
    } catch (error) {
      console.log("RED Element has not been moved", error);
    }
    try {
      await moveElement(blueBox, targetToMove.blue);
      console.log("Blue Element has been moved");
    } catch (error) {
      console.log("Blue Element has not been moved", error);
    }
    try {
      await moveElement(greenBox, targetToMove.green);
      console.log("Green Element has been moved");
    } catch (error) {
      console.log("Green Element has not been moved", error);
    }
  }
  //translateOneByOne();

  async function translateAllAtOnce() {
    try {
      await Promise.all([
        moveElement(redBox, targetToMove.red),
        moveElement(blueBox, targetToMove.blue),
        moveElement(greenBox, targetToMove.green),
      ]);

      console.log("All Elements have been moved");
    } catch (error) {
      console.log("one or more Element has not been moved", error);
    }
  }
  translateAllAtOnce();
}
