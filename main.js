/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

;// ./src/js/game-field/GameField.js
class GameField {
  constructor(element) {
    this._element = element;
  }
  goblin = null;
  cellForGoblin = null;
  changePosition() {
    const allCells = this._element.querySelectorAll(".game-cell");
    const newCellForGoblin = allCells[Math.floor(Math.random() * allCells.length)];
    return newCellForGoblin;
  }
  createGoblin() {
    const goblin = document.createElement("div");
    goblin.className = "goblin";
    this.goblin = goblin;
    const allCells = this._element.querySelectorAll(".game-cell");
    const cellForGoblin = allCells[Math.floor(Math.random() * allCells.length)];
    this.cellForGoblin = cellForGoblin;
    cellForGoblin.appendChild(goblin);
  }
}
;// ./src/js/counter/Counter.js
class Counter {
  count = 0;
  increment() {
    this.count += 1;
    this.counterEl.textContent = this.count;
  }
  createCounterField() {
    const counterEl = document.createElement("div");
    this.counterEl = counterEl;
    counterEl.className = "counter";
    counterEl.textContent = this.count;
    document.body.appendChild(counterEl);
  }
}
;// ./src/js/HandlerAdder.js
class HandlerAdder {
  constructor(counter) {
    this.counter = counter;
    this.goblinClickHandler = this.goblinClickHandler.bind(this);
  }
  addHandler(element) {
    element.addEventListener("click", this.goblinClickHandler);
  }
  goblinClickHandler(e) {
    e.preventDefault();
    this.counter.increment();
  }
}
;// ./src/js/app.js



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
;// ./src/index.js






// TODO: write your code in app.js
/******/ })()
;