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
  looseCount = 0;
  increment() {
    this.count += 1;
    this.counterEl.textContent = this.count;
  }
  looseIncrement() {
    this.looseCount += 1;
    this.looseCounterEl.textContent = this.looseCount;
  }
  createCounterField() {
    const counterEl = document.createElement("div");
    this.counterEl = counterEl;
    counterEl.className = "counter";
    counterEl.textContent = this.count;
    document.body.appendChild(counterEl);
  }
  createLooseCounterField() {
    const looseCounterEl = document.createElement("div");
    this.looseCounterEl = looseCounterEl;
    looseCounterEl.className = "loose-counter";
    looseCounterEl.textContent = this.looseCount;
    document.body.appendChild(looseCounterEl);
  }
}
;// ./src/js/HandlerAdder.js
class HandlerAdder {
  constructor(counter) {
    this.counter = counter;
    this.goblinClickHandler = this.goblinClickHandler.bind(this);
    this.cellClickHandler = this.cellClickHandler.bind(this);
  }
  addHandler(element, handler) {
    element.addEventListener("click", handler);
  }
  deleteHandler(element, handler) {
    element.removeEventListener("click", handler);
  }
  goblinClickHandler(e) {
    e.preventDefault();
    this.counter.increment();
    this.goodPunchFunc();
  }
  cellClickHandler(e) {
    e.preventDefault();
    if (e.target.className === "game-cell") {
      this.counter.looseIncrement();
      this.badPunchFunc();
    }
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
;// ./src/index.js






// TODO: write your code in app.js
/******/ })()
;