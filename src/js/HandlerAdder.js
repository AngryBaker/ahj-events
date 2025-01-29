export default class HandlerAdder {
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
