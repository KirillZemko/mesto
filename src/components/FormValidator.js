export class FormValidator {
  constructor(mainConfigValidation, formElement) {
    this._inputSelector = mainConfigValidation.inputSelector;
    this._submitButtonSelector = mainConfigValidation.submitButtonSelector;
    this._inactiveButtonClass = mainConfigValidation.inactiveButtonClass;
    this._inputErrorClass = mainConfigValidation.inputErrorClass;
    this._errorClass = mainConfigValidation.errorClass;
    this._inputSection = mainConfigValidation.inputSection;
    this._errorClassActive = mainConfigValidation.errorClassActive;
    this._formElement = formElement;
    this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);
  }

  _showInputError(inputElement, errorMessage) {
    const errorElement = inputElement
      .closest(this._inputSection)
      .querySelector(this._inputErrorClass);

    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClassActive);
    inputElement.classList.add(this._errorClass);
  }

  _hideInputError(inputElement) {
    const errorElement = inputElement
      .closest(this._inputSection)
      .querySelector(this._inputErrorClass);

    errorElement.textContent = '';
    errorElement.classList.remove(this._errorClassActive);
    inputElement.classList.remove(this._errorClass);
  }

  _checkInputValidity(inputElement) {
    const isInputNotValid = !inputElement.validity.valid;
    const errorMessage = inputElement.validationMessage;

    if (isInputNotValid) {
      this._showInputError(inputElement, errorMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _toggleButtonState() {
    const hasNotValidInput = this._inputList.some(inputElement => !inputElement.validity.valid);

    if (hasNotValidInput) {
      this.inactiveButton();
    } else {
      this._buttonElement.removeAttribute('disabled');
      this._buttonElement.classList.remove(this._inactiveButtonClass);
    }
  }

  _setEventListeners() {
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    })

    this._toggleButtonState();
  }

  resetValidation() {
    this._toggleButtonState();

    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
    });

  }

  inactiveButton() {
    this._buttonElement.setAttribute('disabled', true);
    this._buttonElement.classList.add(this._inactiveButtonClass);
  }

  enableValidation() {
    this._formElement.addEventListener('submit', (evt) => evt.preventDefault());
    this._setEventListeners();
  }
}
