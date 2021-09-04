export const mainConfigValidation = {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_inactive',
  inputErrorClass: '.popup__input-error',
  errorClass: 'popup__input_disabled',
  inputSection: '.popup__input-section',
  errorClassActive: 'popup__input-error_active'
}

export const popups = document.querySelectorAll('.popup');
export const ESC_CODE = 'Escape';

// переменные popupEditAvatar
export const popupEditAvavat = document.querySelector('.popup_edit-avatar');
export const buttonEditAvatar = document.querySelector('.profile__avatar-edit-button');

// переменные профиля
export const profileData = {
  title: document.querySelector('.profile__name'),
  subtitle: document.querySelector('.profile__job'),
  avatar: document.querySelector('.profile__avatar'),
}
export const profileName = document.querySelector('.profile__name');
export const profileJob = document.querySelector('.profile__job');
export const profileAvatar = document.querySelector('.profile__avatar');

//переменный popupConformation
export const popupConfirm = document.querySelector('.popup_conformation');

// переменные popupEdit
export const popupEdit = document.querySelector('.popup_edit');
export const editBtn = document.querySelector('.edit-button');
export const closeBtnEditPopup = popupEdit.querySelector('.popup__close-button');
export const formPopupEdit = popupEdit.querySelector('.popup__form');
export const nameInput = document.querySelector('.popup__input_type_name');
export const jobInput = document.querySelector('.popup__input_type_job');

// переменные popupAddCard
export const popupAddCard = document.querySelector('.popup_add-card');
export const closeBtnNewItemPopup = document.querySelector('.popup__close-button_type_add-card');
export const formPopupAddCard = document.querySelector('.popup__form_type_add-card');
export const newItemBtn = document.querySelector('.add-button');
export const titleInput = document.querySelector('.popup__input_type_title');
export const linkInput = document.querySelector('.popup__input_type_url');
export const createCardBtn = document.querySelector('.popup__button_type-add-card');

// переменные viewPopup
export const viewPopup = document.querySelector('.popup_type_view');
export const viewPopupContainer = document.querySelector('.popup__container_type_image');
export const viewImage = document.querySelector('.popup__image');
export const viewPopupAlt = document.querySelector('.popup__description');
export const closeBtnViewPopup = document.querySelector('.popup__close-button_type_view');

// переменные place-template
export const placesContainer = document.querySelector('.places');
export const placeTemplateContent = document.querySelector('.place-template').content;

export const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
