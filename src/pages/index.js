import '../pages/index.css';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import { Card } from '../components/Card.js'
import { FormValidator } from '../components/FormValidator.js';
import { initialCards } from '../components/constants.js';
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
} from '../components/constants.js';

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
