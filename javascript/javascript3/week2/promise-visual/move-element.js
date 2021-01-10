// Creating new scope
{
  const redBox = document.querySelector("ul.marks li:nth-child(1)");
  const blueBox = document.querySelector("ul.marks li:nth-child(2)");
  const greenBox = document.querySelector("ul.marks li:nth-child(3)");
  const boxes = [redBox, blueBox, greenBox];

  const span = document.querySelector("span");

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function randomizeStartPosition() {
    boxes.forEach((box) => {
      const x = getRandomInt(-20, 20);
      const y = getRandomInt(-20, 20);

      box.style.left = x;
      box.style.top = y;
    });
  }

  randomizeStartPosition();

  const targetToMoves = document.querySelectorAll("ul.targetToMoves li");
  // continously check if circles has been added to the right targetToMoves
  setInterval(() => {
    settargetToMoveFulfilled(redBox, targetToMoves[0], { x: 20, y: 300 });
    settargetToMoveFulfilled(blueBox, targetToMoves[1], { x: 400, y: 300 });
    settargetToMoveFulfilled(greenBox, targetToMoves[2], { x: 400, y: 20 });

    const alltargetToMovesFulfilled = [...targetToMoves].every((targetToMove) =>
      targetToMove.classList.contains("fulfilled")
    );
    if (alltargetToMovesFulfilled) {
      setTimeout(() => span.classList.add("shown"), 300);
    }
  }, 10);

  function settargetToMoveFulfilled(box, targetToMoveBox, fulfilledPosition) {
    const renderedClientBox = box.getBoundingClientRect();

    if (
      renderedClientBox.left === fulfilledPosition.x &&
      renderedClientBox.top === fulfilledPosition.y
    ) {
      targetToMoveBox.classList.add("fulfilled");
    }
  }

  /**
   * @param {DOMelement} boxToMove - A DOM element of the box to move
   * @param {Position} newPosition - An object specifying how much to move the box in the x and y directions.
   * @return {Promise<any>}
   */

  function moveElement(boxToMove, newPosition) {
    return new Promise((resolve) => {
      boxToMove.style.transform = `translate(${newPosition.x}px, ${newPosition.y}px)`;
      boxToMove.addEventListener("transitionend", resolve);
    });
  }

  window.moveElement = moveElement;
}
