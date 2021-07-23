export const mainConfigValidation = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_inactive',
  inputErrorClass: '.popup__input-error',
  errorClass: 'popup__input_disabled',
  inputSection: '.popup__input-section',
  errorClassActive: 'popup__input-error_active'
}

export class FormValidator {
  constructor(mainConfigValidation, formElement) {
    this._formSelector = mainConfigValidation.formSelector;
    this._inputSelector = mainConfigValidation.inputSelector;
    this._submitButtonSelector = mainConfigValidation.submitButtonSelector;
    this._inactiveButtonClass = mainConfigValidation.inactiveButtonClass;
    this._inputErrorClass = mainConfigValidation.inputErrorClass;
    this._errorClass = mainConfigValidation.errorClass;
    this._inputSection = mainConfigValidation.inputSection;
    this._errorClassActive = mainConfigValidation.errorClassActive;
    this._formElement = formElement;
  }

  _showInputError = (inputElement, errorMessage, mainConfigValidation) => {
    const errorElement = inputElement
      .closest(this._inputSection)
      .querySelector(this._inputErrorClass);

    const errorInput = inputElement
      .closest(this._inputSection)
      .querySelector(this._inputSelector);

    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClassActive);
    errorInput.classList.add(this._errorClass);
  }

  _hideInputError = (inputElement, mainConfigValidation) => {
    const errorElement = inputElement
      .closest(this.inputSection)
      .querySelector(this._inputErrorClass);

    const errorInput = inputElement
     .closest(this._inputSection)
      .querySelector(this._inputSelector);

    errorElement.textContent = '';
    errorElement.classList.remove(this._errorClassActive);
    errorInput.classList.remove(this._errorClass);
  }

  _checkInputValidity(formElement, inputElement, mainConfigValidation) {
    const isInputNotValid = !inputElement.validity.valid;
    const errorMessage = inputElement.validationMessage;

    if (isInputNotValid) {
      showInputError(inputElement, errorMessage, mainConfigValidation);
    } else {
      hideInputError(inputElement, mainConfigValidation);
    }
  }

  _toggleButtonState(inputList, buttonElement, mainConfigValidation) {
    const hasNotValidInput = inputList.some(inputElement => !inputElement.validity.valid);

    if (hasNotValidInput) {
      buttonElement.setAttribute('disabled', true);
      buttonElement.classList.add(this._inactiveButtonClass);
    } else {
      buttonElement.removeAttribute('disabled');
      buttonElement.classList.remove(this._inactiveButtonClass);
    }
  }

  _setEventListeners = (formElement, inputSelector, submitButtonSelector, mainConfigValidation) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    })

    const inputList = Array.from(formElement.querySelectorAll(this._inputSelector));
    const buttonElement = formElement.querySelector(this._submitButtonSelector);

    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', (evt) => {
        _checkInputValidity(formElement, inputElement, mainConfigValidation);
        _toggleButtonState(inputList, buttonElement, mainConfigValidation);
      });
    })

    _toggleButtonState(inputList, buttonElement, mainConfigValidation);
  }

  enableValidation() {
    const formList = Array.from(document.querySelectorAll(this._formSelector));

    formList.forEach(formElement => {
      _setEventListeners(this._formElement, this._inputSelector, this._submitButtonSelector, mainConfigValidation);
    });
  }
}
