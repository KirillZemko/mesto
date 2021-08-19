export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._items = items;
    this._renderer = renderer;

    this._containerSelector = containerSelector;
  }

  // метод рендерит элемент (для каждого элемента массива items запускаем callback-функцию renderer)
  renderItems() {
    this._items.forEach(item => this._renderer(item));
  }

  // метод добавление элемента в DOM (принимает DOM элемент и вставляем этот элемент в containerSelector)
  addItem(element) {
    this._containerSelector.prepend(element);
  }
}
