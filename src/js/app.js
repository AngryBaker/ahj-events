import GameField from "./game-field/GameField";
import Counter from "./counter/Counter";
import HandlerAdder from "./HandlerAdder";
// TODO: write code here

document.addEventListener("DOMContentLoaded", () => {
  const fieldElem = document.createElement("ul");
  fieldElem.className = "game-field";
  for (let i = 0; i < 16; i++) {
    const cellElem = document.createElement("li");
    cellElem.className = "game-cell";
    fieldElem.appendChild(cellElem);
  }

  document.body.appendChild(fieldElem);

  const gameField = new GameField(document.querySelector(".game-field"));
  gameField.createGoblin();
  const jumpInterval = setInterval(() => {
    let newCell = gameField.changePosition();
    while (newCell === gameField.cellForGoblin) {
      newCell = gameField.changePosition();
    }
    newCell.appendChild(gameField.goblin);
  }, 1000);

  const counter = new Counter();
  counter.createCounterField();
  counter.createLooseCounterField();

  const handlerAdder = new HandlerAdder(counter);
  handlerAdder.addHandler(gameField.goblin, handlerAdder.goblinClickHandler);
  handlerAdder.addHandler(fieldElem, handlerAdder.cellClickHandler);
  handlerAdder.goodPunchFunc = function () {
    let newCell = gameField.changePosition();
    while (newCell === gameField.cellForGoblin) {
      newCell = gameField.changePosition();
    }
    newCell.appendChild(gameField.goblin);
  };

  const looseCheker = function () {
    if (counter.looseCount === 5) {
      console.log("Potracheno");
      clearInterval(jumpInterval);
      // eslint-disable-next-line prettier/prettier
      handlerAdder.deleteHandler(gameField.goblin, handlerAdder.goblinClickHandler);
      handlerAdder.deleteHandler(fieldElem, handlerAdder.cellClickHandler);
    }
  };

  handlerAdder.badPunchFunc = looseCheker;
});
