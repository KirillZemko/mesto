import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector, viewPopupAlt, viewImage) {
  super(popupSelector);
      this._title = viewPopupAlt;
      this._img = viewImage;
  }

  open(name, link) {
    this._img.alt = name;
    this._img.src = link;
    this._title.textContent = name;

    super.open();
  }
}
