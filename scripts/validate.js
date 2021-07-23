// объект со стилями валидации
// const mainConfigValidation = {
//   formSelector: '.popup__form',
//   inputSelector: '.popup__input',
//   submitButtonSelector: '.popup__button',
//   inactiveButtonClass: 'popup__button_inactive',
//   inputErrorClass: '.popup__input-error',
//   errorClass: 'popup__input_disabled',
//   inputSection: '.popup__input-section',
//   errorClassActive: 'popup__input-error_active'
// }

// // функция отображения ошибок
// const showInputError = (inputElement, errorMessage, mainConfigValidation) => {
//   const errorElement = inputElement
//     .closest(mainConfigValidation.inputSection)
//     .querySelector(mainConfigValidation.inputErrorClass);

//   const errorInput = inputElement
//     .closest(mainConfigValidation.inputSection)
//     .querySelector(mainConfigValidation.inputSelector);

//   errorElement.textContent = errorMessage;
//   errorElement.classList.add(mainConfigValidation.errorClassActive);
//   errorInput.classList.add(mainConfigValidation.errorClass);
// }

// // функция скрытия ошибок
// const hideInputError = (inputElement, mainConfigValidation) => {
//   const errorElement = inputElement
//     .closest(mainConfigValidation.inputSection)
//     .querySelector(mainConfigValidation.inputErrorClass);

//   const errorInput = inputElement
//    .closest(mainConfigValidation.inputSection)
//     .querySelector(mainConfigValidation.inputSelector);

//   errorElement.textContent = '';
//   errorElement.classList.remove(mainConfigValidation.errorClassActive);
//   errorInput.classList.remove(mainConfigValidation.errorClass);
// }

// // проверка введенных данных в input на валидность validity.valid
// const checkInputValidity = (formElement, inputElement, mainConfigValidation) => {
//   const isInputNotValid = !inputElement.validity.valid;
//   const errorMessage = inputElement.validationMessage;

//   if (isInputNotValid) {
//     showInputError(inputElement, errorMessage, mainConfigValidation);
//   } else {
//     hideInputError(inputElement, mainConfigValidation);
//   }
// }

// // состояние кнопки
// const toggleButtonState = (inputList, buttonElement, mainConfigValidation) => {
//   const hasNotValidInput = inputList.some(inputElement => !inputElement.validity.valid);

//   if (hasNotValidInput) {
//     buttonElement.setAttribute('disabled', true);
//     buttonElement.classList.add(mainConfigValidation.inactiveButtonClass);
//   } else {
//     buttonElement.removeAttribute('disabled');
//     buttonElement.classList.remove(mainConfigValidation.inactiveButtonClass);
//   }
// }

// // слушатель на форму и элементы формы
// const setEventListeners = (formElement, inputSelector, submitButtonSelector, mainConfigValidation) => {
//   formElement.addEventListener('submit', (evt) => {
//     evt.preventDefault();
//   })

//   const inputList = Array.from(formElement.querySelectorAll(inputSelector));
//   const buttonElement = formElement.querySelector(submitButtonSelector);

//   inputList.forEach((inputElement) => {
//     inputElement.addEventListener('input', (evt) => {
//       checkInputValidity(formElement, inputElement, mainConfigValidation);
//       toggleButtonState(inputList, buttonElement, mainConfigValidation);
//     });
//   })

//   toggleButtonState(inputList, buttonElement, mainConfigValidation);
// }

// // основная функция проверки на валидацию
// const enableValidation = ({ formSelector, inputSelector, submitButtonSelector }) => {
//   const formList = Array.from(document.querySelectorAll(formSelector));

//   formList.forEach(formElement => {
//     setEventListeners(formElement, inputSelector, submitButtonSelector, mainConfigValidation);
//   });
// }

// enableValidation(mainConfigValidation);
