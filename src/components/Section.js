export default class Section {
  constructor({ renderer }, containerSelector) {
    this._renderer = renderer;

    this._container = document.querySelector(containerSelector);
  }

  // метод рендерит элемент (для каждого элемента массива items запускаем callback-функцию renderer)
  renderItems(items) {
    items.forEach(item => this._renderer(item));
  }

  setItems(element) {
    this._container.append(element);
  }

  // метод добавление элемента в DOM (принимает DOM элемент и вставляем этот элемент в containerSelector)
  addItem(element) {
    this._container.prepend(element);
  }
}
