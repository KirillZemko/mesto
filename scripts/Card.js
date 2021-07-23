import { viewPopup, viewPopupContainer, viewImage, viewPopupAlt, openPopup } from './index.js';

export class Card {
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

  _togglerLikeBtn() {
    this._element.querySelector('.place__like').classList.toggle('place__like_type_active');
  }

  _handelDel() {
    this._element.querySelector('.place');
    this._element.remove();
  }

  _openPopup() {
    this._element.classList.add('popup_opened');
    document.addEventListener('keydown', closeByEsc);
  }

  _showImagePopup(evt) {
    evt.preventDefault();

    const image = evt.target.closest('.place__image');

    viewImage.src = image.src;
    viewImage.alt = image.alt;

    viewPopupAlt.textContent = image.alt;

    viewPopupContainer.append(viewPopupAlt);

    openPopup(viewPopup);
  }

  _setEventListener() {
    this._element.querySelector('.place__like').addEventListener('click', () => {
      this._togglerLikeBtn();
    });
    this._element.querySelector('.place__trash-btn').addEventListener('click', () => {
      this._handelDel();
    });
    this._element.querySelector('.place__image').addEventListener('click', (evt) => {
      this._showImagePopup(evt);
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
