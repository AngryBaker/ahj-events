export default class GameField {
  constructor(element) {
    this._element = element;
  }
  goblin = null;
  cellForGoblin = null;

  changePosition() {
    const allCells = this._element.querySelectorAll(".game-cell");
    const newCellForGoblin =
      allCells[Math.floor(Math.random() * allCells.length)];
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
