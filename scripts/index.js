import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';
import { initialCards } from './initialcards.js';
import { mainConfigValidation } from './constants.js';

const popups = document.querySelectorAll('.popup');
const ESC_CODE = 'Escape';
// переменные профиля
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');

// переменные popupEdit
const popupEdit = document.querySelector('.popup_edit');
const editBtn = document.querySelector('.edit-button');
const closeBtnEditPopup = popupEdit.querySelector('.popup__close-button');
const formPopupEdit = popupEdit.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');

// переменные popupAddCard
const popupAddCard = document.querySelector('.popup_add-card');
const closeBtnNewItemPopup = document.querySelector('.popup__close-button_type_add-card');
const formPopupAddCard = document.querySelector('.popup__form_type_add-card');
const newItemBtn = document.querySelector('.add-button');
const titleInput = document.querySelector('.popup__input_type_title');
const linkInput = document.querySelector('.popup__input_type_url');
const createCardBtn = document.querySelector('.popup__button_type-add-card');

// переменные viewPopup
export const viewPopup = document.querySelector('.popup_type_view');
export const viewPopupContainer = document.querySelector('.popup__container_type_image');
export const viewImage = document.querySelector('.popup__image');
export const viewPopupAlt = document.querySelector('.popup__description');
const closeBtnViewPopup = document.querySelector('.popup__close-button_type_view');
closeBtnViewPopup.addEventListener('click', () => (closePopup(viewPopup)));

// переменные place-template
const placesContainer = document.querySelector('.places');
const placeTemplateContent = document.querySelector('.place-template').content;

// функция изменяет значения введенных пользователем в input-ы и изменяет profileName, profileJob
function handleProfileFormSubmit(evt) {
    evt.preventDefault();

    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;

    closePopup(popupEdit);
}

editBtn.addEventListener('click', function() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;

  openPopup(popupEdit);
})

closeBtnEditPopup.addEventListener('click', () => (closePopup(popupEdit)));
formPopupEdit.addEventListener('submit', handleProfileFormSubmit);
newItemBtn.addEventListener('click', () => (openPopup(popupAddCard)));
closeBtnNewItemPopup.addEventListener('click', () => (closePopup(popupAddCard)));

// добавление новой карточки по клику на кнопку создать
formPopupAddCard.addEventListener('submit', function() {
  // создание карточки по клику на кнопку создать. Карточка создается из класса Card, в конструктор попадают данные
  // из input-ов попапа formPopupAddCard, вешаюются все слушатели
  const inputValues = {
    name: titleInput.value,
    link: linkInput.value
  }
  const card = new Card(inputValues, '.place-template', showImagePopup);
  const cardElement = card.generatePlaceCard();

  placesContainer.prepend(cardElement);

  formPopupAddCard.reset();

  formPopupAddCardValidator.inactiveButton();

  closePopup(popupAddCard);
});


// слушатель закрытия любого popup по клику на overlay и кнопку esc
popups.forEach((popup) => {
  popup.addEventListener('click', (evt) => {
    if (evt.target === evt.currentTarget) {
      closePopup(popup);
    }
  })
})

export function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEsc);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEsc);
}

function closeByEsc(evt) {
  if (evt.key === ESC_CODE) {
    const openedPopup = document.querySelector('.popup_opened');

    closePopup(openedPopup);
  }
}

function showImagePopup(evt) {
  evt.preventDefault();

  const image = evt.target.closest('.place__image');

  viewImage.src = image.src;
  viewImage.alt = image.alt;
  viewPopupAlt.textContent = image.alt;

  viewPopupContainer.append(viewPopupAlt);

  openPopup(viewPopup);
}

// перебираем объект с карточками
initialCards.forEach((item) => {
  // создаем экземпляр карточки из класса Card
  const card = new Card(item, '.place-template', showImagePopup);
  // создаем карточку и возвращаем наружу
  const cardElement = card.generatePlaceCard();

  // добавляем в DOM
  placesContainer.append(cardElement);
})

const formPopupEditValidator = new FormValidator(mainConfigValidation, formPopupEdit);
const formPopupAddCardValidator = new FormValidator(mainConfigValidation, formPopupAddCard);

formPopupEditValidator.enableValidation();
formPopupAddCardValidator.enableValidation();
