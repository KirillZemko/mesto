const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  const errorInput = formElement.querySelector(`#${inputElement.id}`);

  errorElement.textContent = errorMessage;
  errorElement.classList.add('popup__input-error_active');
  errorInput.classList.add('popup__input_disabled');
}

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  const errorInput = formElement.querySelector(`#${inputElement.id}`);

  errorElement.textContent = '';
  errorElement.classList.remove('popup__input-error_active');
  errorInput.classList.remove('popup__input_disabled');
}

const checkInputValidity = (formElement, inputElement) => {
  const isInputNotValid = !inputElement.validity.valid;
  const errorMessage = inputElement.validationMessage;

  if (isInputNotValid) {
    showInputError(formElement, inputElement, errorMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
}

const setEventListeners = (formElement) => {
  formElement.addEventListener('submit', (evt) => {
    evt.preventDefault();
  })

  const inputList = Array.from(formElement.querySelectorAll('.popup__input'));

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', (evt) => {
      checkInputValidity(formElement, inputElement);
    });
  })
}

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.popup__form'));
  formList.forEach(setEventListeners);
}

enableValidation();
