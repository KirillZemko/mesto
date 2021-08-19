import { ESC_CODE } from "./constants.js";
import { popups } from "./constants.js";

export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  // открытие попапа
  open() {
    this._popupSelector.classList.add('popup_opened');
    // this._element = document.querySelector(this._popupSelector).classList.add('popup_opened');
    this._element = document.addEventListener('keydown', this._handleEscClose);
  }

  // закрытие попапа
  close() {
    this._popupSelector.classList.remove('popup_opened');
    this._popupSelector.removeEventListener('keydown', this._handleEscClose);
  }

  // метод добавления слущателей событий
  setEventListeners() {
    popups.forEach((popup) => {
      popup.addEventListener('click', (evt) => {
        if (evt.target.classList.contains('popup__close-button')) {
          this.close();
        }
      })
    })

    this._popupSelector.addEventListener('click', () => {
      this._closeOnOverlay();
    });
  }

  // обработчик событий по клику на оверлэй
  _closeOnOverlay() {
    this._popupSelector.addEventListener('click', (evt) => {
      if (evt.target === evt.currentTarget) {
        this.close();
      }
    });
  }

  // закрытие по нажатию на ESC
  _handleEscClose(evt) {
    if (evt.key === ESC_CODE) {
      this._element = document.querySelector('.popup_opened');
      this.close(this._popupSelector);
    }
  }
}
