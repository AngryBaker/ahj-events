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

  console.log(jumpInterval);

  const counter = new Counter();
  counter.createCounterField();
  counter.increment();
  console.log(counter);

  const handlerAdder = new HandlerAdder(counter);
  handlerAdder.addHandler(gameField.goblin);
});
