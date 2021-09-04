import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._inputList = this._popup.querySelectorAll('.popup__input');

    this._submit = (evt) => {
      evt.preventDefault();

      this._handleFormSubmit(this._getInputValues(this._inputList));
      this.close();
    }

    this._submitClick = this._submit.bind(this);

    this._submitButton = this._popup.querySelector('.popup__button');
    this._defaultSubmitButton = this._submitButton.textContent;
  }

  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach(input => this._formValues[input.name] = input.value);

    return this._formValues;
  }

  renderLoading(isLoading, message='Сохранение...'){
    if (isLoading) {
      this._submitButton.textContent = message;
    } else {
      this._submitButton.textContent = this._defaultSubmitButton;
    }
  }

  close() {
    super.close();
    this._popup.querySelector('.popup__form').reset();
  }

  setEventListeners() {
    super.setEventListeners();
    this._popup.addEventListener('submit', this._submitClick);
  }
}
