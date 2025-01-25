export default class Counter {
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