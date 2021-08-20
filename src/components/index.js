import Section from './Section.js';
import PopupWithImage from './PopupWithImage.js';
import PopupWithForm from './PopupWithForm.js';
import UserInfo from './UserInfo.js';
import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';
import { initialCards } from './constants';
import '../pages/index.css';
import {
  mainConfigValidation,
  popups,
  ESC_CODE,
  profileName,
  profileJob,
  popupEdit,
  editBtn,
  closeBtnEditPopup,
  formPopupEdit,
  nameInput,
  jobInput,
  popupAddCard,
  closeBtnNewItemPopup,
  formPopupAddCard,
  newItemBtn,
  titleInput,
  linkInput,
  createCardBtn,
  viewPopup,
  viewPopupContainer,
  viewImage,
  viewPopupAlt,
  closeBtnViewPopup,
  placesContainer,
  placeTemplateContent,
  profileData
} from './constants.js';

// создаем экземпляры карточек класса Section
const cardList = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = createCard(item, '.place-template');
    const cardElement = card.generatePlaceCard();
    cardList.addItem(cardElement);
    }
  },
  '.places'
);

function createCard(item, template) {
  const card = new Card(item, '.place-template', {
    handelCardClick: (name, link) => {
      popupWithImg.open(name, link);
    }
  }, template);

  return card;
}

const newCard = new PopupWithForm(
  popupAddCard,
  (item) => {
    const newCards = createCard(item, '.place-template');
    const newAddedCard = newCards.generatePlaceCard();
    cardList.addItem(newAddedCard);
});

// const popupAddClass = new Popup(popupAddCard);
const popupWithImg = new PopupWithImage(viewPopup, viewPopupAlt, viewImage);
const userInfo = new UserInfo(profileData);

const popupProfile = new PopupWithForm(
  popupEdit,
  (item) => {
    // const item = {
    //   name: nameInput.value,
    //   job: jobInput.value
    // }
    userInfo.setUserInfo(item);
    console.log(item);
  }
);

popupProfile.setEventListeners();

// функция открывает открывает попап редактирования профиля
editBtn.addEventListener('click', () => {
  popupProfile.open();

  const profileInfo = userInfo.getUserInfo();

  nameInput.value = profileInfo.title;
  jobInput.value = profileInfo.subtitle;
});


newItemBtn.addEventListener('click', () => {
  newCard.open();
});

// публикуем созданные карточки в DOM
cardList.renderItems();

// создаем переменные popup-ов при помощи класса FormValidator
const formPopupEditValidator = new FormValidator(mainConfigValidation, formPopupEdit);
const formPopupAddCardValidator = new FormValidator(mainConfigValidation, formPopupAddCard);

// включаем валидацию форм попапов при помощи публичного метода enableValidation класса FormValidator
formPopupEditValidator.enableValidation();
formPopupAddCardValidator.enableValidation();

newCard.setEventListeners();
popupWithImg.setEventListeners();
