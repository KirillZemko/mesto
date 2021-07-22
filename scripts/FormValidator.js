import { mainConfigValidation, showInputError, hideInputError } from './validate.js';

class FormValidator {
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

  _checkInputValidity() {
    const isInputNotValid = !inputElement.validity.valid;
    const errorMessage = inputElement.validationMessage;

    if (isInputNotValid) {
      showInputError(inputElement, errorMessage, mainConfigValidation);
    } else {
      hideInputError(inputElement, mainConfigValidation);
    }
  }

  _toggleButtonState() {
    const hasNotValidInput = inputList.some(inputElement => !inputElement.validity.valid);

    if (hasNotValidInput) {
      buttonElement.setAttribute('disabled', true);
      buttonElement.classList.add(this._inactiveButtonClass);
    } else {
      buttonElement.removeAttribute('disabled');
      buttonElement.classList.remove(this.inactiveButtonClass);
    }
  }

  _setEventListeners() {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    })

    const inputList = Array.from(formElement.querySelectorAll(this._inputSelector));
    const buttonElement = formElement.querySelector(this._submitButtonSelector);

    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', (evt) => {
        checkInputValidity(formElement, inputElement, mainConfigValidation);
        toggleButtonState(inputList, buttonElement, mainConfigValidation);
      });
    })

    toggleButtonState(inputList, buttonElement, mainConfigValidation);
  }

  enableValidation() {
    const formList = Array.from(document.querySelectorAll(this._formSelector));

    formList.forEach(formElement => {
      setEventListeners(this._formElement, this._inputSelector, this._submitButtonSelector);
    });
  }
}
