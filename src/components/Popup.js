import { ESC_CODE } from "../utils/constants.js";

export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  // открытие попапа
  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  }

  // закрытие попапа
  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  }

  // метод добавления слущателей событий
  setEventListeners() {
    this._popup.addEventListener('click', (evt) => {
      if (evt.target.classList.contains('popup__close-button')) {
        this.close();
      }
    });

    this._popup.addEventListener('click', (evt) => {
      this._closeOnOverlay(evt);
    });
  }

  // обработчик событий по клику на оверлэй
  _closeOnOverlay(evt) {
    if (evt.target === evt.currentTarget) {
      this.close();
    }
  }

  // закрытие по нажатию на ESC
  _handleEscClose(evt) {
    if (evt.key === ESC_CODE) {
      this.close();
    }
  }
}
