export default class Counter {
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
