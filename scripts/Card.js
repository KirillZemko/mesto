import { initialCards } from './initialcards.js'
import { togglerLikeBtn, handleDel, showImagePopup } from './index.js';

class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
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

  // обработчки событий
  _setEventListener() {
    this._element.querySelector('.place__like').addEventListener('click', togglerLikeBtn);
    this._element.querySelector('.place__trash-btn').addEventListener('click', handleDel);
    this._element.querySelector('.place__image').addEventListener('click', showImagePopup);
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

// перебираем объект с карточками
initialCards.forEach((item) => {
  // создаем экземпляр карточки
  const card = new Card(item, '.place-template');
  // создаем карточку и возвращаем наружу
  const cardElement = card.generatePlaceCard();

  // добавляем в DOM
  document.querySelector('.places').append(cardElement);
})
