import { mainConfigValidation } from './validate.js';

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
  }


}
