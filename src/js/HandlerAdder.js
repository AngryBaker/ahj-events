export default class HandlerAdder {
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
