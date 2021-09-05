import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
  super(popupSelector);
      this._title = this._popup.querySelector('.popup__description');
      this._img = this._popup.querySelector('.popup__image');
  }

  open(name, link) {
    this._img.alt = name;
    this._img.src = link;
    this._title.textContent = name;

    super.open();
  }
}
