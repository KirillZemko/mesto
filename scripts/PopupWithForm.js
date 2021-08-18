import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._inputList = this._popupSelector.querySelectorAll('.popup__input');

    this._submit = (evt) =>{
      evt.preventDefault();

      this._handleFormSubmit(this._getInputValues());

      this.close();
    }

    this._submitClick = this._submit.bind(this);
  }

  _getInputValues() {
    this._inputList = this._popupSelector.querySelectorAll('.popup__input');
    this._formValues = {};

    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });

    return this._formValues;
  }
  setEventListeners() {
    super.setEventListeners();
    this._popupSelector.addEventListener('submit', this._submitClick);
  }

  close() {
    super.close();
    this._popupSelector.querySelector('.popup__form').reset();
  }
}
