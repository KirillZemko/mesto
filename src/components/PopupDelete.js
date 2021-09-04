import Popup from "./Popup.js";

export default class PopupDelete extends Popup {
  constructor(popup, submit) {
    super(popup);
    this._submit = submit;
  }

  setEventListeners(){
    super.setEventListeners();
    this._popup.addEventListener('submit', (evt) => {
      evt.preventDefault()
      this._submit(evt, this._card)
    })
  }

  open(card) {
    this._card = card;
    super.open();
  }
}
