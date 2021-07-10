const showInputError = (inputElement, errorMessage) => {
  const errorElement = inputElement
    .closest('.popup__input-section')
    .querySelector('.popup__input-error');

  const errorInput = inputElement
    .closest('.popup__input-section')
    .querySelector('.popup__input');

  errorElement.textContent = errorMessage;
  errorElement.classList.add('popup__input-error_active');
  errorInput.classList.add('popup__input_disabled');
}

const hideInputError = (inputElement) => {
  const errorElement = inputElement
    .closest('.popup__input-section')
    .querySelector('.popup__input-error');

  const errorInput = inputElement
   .closest('.popup__input-section')
    .querySelector('.popup__input');

  errorElement.textContent = '';
  errorElement.classList.remove('popup__input-error_active');
  errorInput.classList.remove('popup__input_disabled');
}

const checkInputValidity = (formElement, inputElement) => {
  const isInputNotValid = !inputElement.validity.valid;
  const errorMessage = inputElement.validationMessage;

  if (isInputNotValid) {
    showInputError(inputElement, errorMessage);
  } else {
    hideInputError(inputElement);
  }
}

const toggleButtonState = (inputList, buttonElement) => {
  const hasNotValidInput = inputList.some(inputElement => !inputElement.validity.valid);

  if (hasNotValidInput) {
    buttonElement.setAttribute('disabled', true);
    buttonElement.classList.add('popup__button_inactive');
  } else {
    buttonElement.removeAttribute('disabled');
    buttonElement.classList.remove('popup__button_inactive');
  }
}

const setEventListeners = (formElement, inputSelector, submitButtonSelector, inactiveButtonClass) => {
  formElement.addEventListener('submit', (evt) => {
    evt.preventDefault();
  })

  const inputList = Array.from(formElement.querySelectorAll(inputSelector));
  const buttonElement = formElement.querySelector(submitButtonSelector);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', (evt) => {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  })

  toggleButtonState(inputList, buttonElement);
}

const enableValidation = ({formSelector, inputSelector, submitButtonSelector, inactiveButtonClass }) => {
  const formList = Array.from(document.querySelectorAll(formSelector));

  formList.forEach(formElement => {
    setEventListeners(formElement, inputSelector, submitButtonSelector);
  });
}

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
});
