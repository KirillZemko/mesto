export class Card {
  constructor(data, cardSelector, { handelCardClick }) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._handelCardClick = handelCardClick;
  }

  // получаем макет из DOM дерева
  _getPlaceTemplate() {
    const placeElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.place')
      .cloneNode(true);

    return placeElement;
  }

  _togglerLikeBtn() {
    this._element.querySelector('.place__like').classList.toggle('place__like_type_active');
  }

  _handelDel() {
    this._element.remove();
  }

  // обработчик событий
  _setEventListener() {
    this._element.querySelector('.place__like').addEventListener('click', () => {
      this._togglerLikeBtn();
    });
    this._element.querySelector('.place__trash-btn').addEventListener('click', () => {
      this._handelDel();
    });
    this._element.querySelector('.place__image').addEventListener('click', (evt) => {
      evt.preventDefault();

      this._handelCardClick(this._name, this._link);
    });
  }

  // подготовка карточки к публикации
  generatePlaceCard() {
    // записываем разметку в приватное поле _element. Так у других элементов появится доступ к ней.
    this._element = this._getPlaceTemplate();
    this._setEventListener();

    this._element.querySelector('.place__image').src = this._link;
    this._element.querySelector('.place__image').alt = this._name;
    this._element.querySelector('.place__title').textContent = this._name;

    return this._element;
  }
}
